import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  serverTimestamp,
  Timestamp,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { listAll, ref, deleteObject } from "firebase/storage";
import app from "../init";
import bycript from "bcrypt";
import { storage } from "../init";

const firestore = getFirestore(app);
import NodeCache from "node-cache";

// Inisialisasi cache dengan TTL 60 detik
const dataCache = new NodeCache({ stdTTL: 86400 });

// Fungsi untuk mengambil data dari Firestore
export async function retrieveData(collectionName: string) {
  // Cek apakah data sudah ada di cache/
  const cachedData = dataCache.get<any>(collectionName);

  if (cachedData) {
    // console.log(
    //   `[${new Date().toLocaleString()}] Data untuk koleksi "${collectionName}" diambil dari cache. Jumlah dokumen: ${
    //     cachedData.length
    //   }`
    // );
    return cachedData;
  }

  try {
    // Ambil data dari Firestore
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Set cache dengan data yang baru diambil
    dataCache.set(collectionName, data);
    // console.log(
    //   `[${new Date().toLocaleString()}] Data untuk koleksi "${collectionName}" diambil dari Firestore dan disimpan ke cache. Jumlah dokumen: ${
    //     data.length
    //   }`
    // );

    // Perbarui cache saat ada perubahan di Firestore pada koleksi tersebut
    onSnapshot(collection(firestore, collectionName), (snapshot) => {
      const cachedData = dataCache.get<any>(collectionName) || [];
      let updatedData = [...cachedData];

      snapshot.docChanges().forEach((change) => {
        const docData = {
          id: change.doc.id,
          ...change.doc.data(),
        };

        if (change.type === "added") {
          // Cek apakah dokumen sudah ada di cache sebelum menambahkan
          const existingIndex = updatedData.findIndex(
            (doc) => doc.id === docData.id
          );
          if (existingIndex === -1) {
            // Dokumen belum ada di cache, tambahkan
            updatedData.push(docData);
          }
        } else if (change.type === "modified") {
          // Perbarui dokumen yang sudah ada di cache
          const index = updatedData.findIndex(
            (doc) => doc.id === change.doc.id
          );
          if (index > -1) {
            updatedData[index] = docData;
          }
        } else if (change.type === "removed") {
          updatedData = updatedData.filter((doc) => doc.id !== change.doc.id);
        }
      });

      dataCache.set(collectionName, updatedData);
    });

    return data;
  } catch (error) {
    console.error(
      `[${new Date().toLocaleString()}] Gagal mengambil data untuk koleksi "${collectionName}" dari Firestore: ${error}`
    );
    throw new Error("Failed to fetch data from Firestore");
  }
}

// Fungsi untuk mengambil data berdasarkan ID
export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "pengguna"),
    where("email", "==", data.email),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const userData = snapshot.docs[0].data();
    const userId = snapshot.docs[0].id;

    const userRef = doc(firestore, "pengguna", userId);
    await updateDoc(userRef, { terakhirMasuk: serverTimestamp() });

    return { id: userId, ...userData };
  } else {
    return null;
  }
}

export async function register(data: {
  nama: string;
  email: string;
  password: string;
  posisi: string;
}) {
  const q = query(
    collection(firestore, "pengguna"),
    where("email", "==", data.email),
    limit(1)
  );
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return { status: false, statusCode: 400, message: "Email sudah terdaftar" };
  }

  // Validasi data input (contoh sederhana):
  // if (!data.nama || !data.email || !data.password || !data.posisi) {
  //   return { status: false, statusCode: 400, message: "Data tidak lengkap" };
  // }

  const hashedPassword = await bycript.hash("12345", 10);

  try {
    await addDoc(collection(firestore, "pengguna"), {
      nama: data.nama,
      email: data.email,
      password: hashedPassword,
      posisi: data.posisi,
      status: "Aktif",
      terakhirMasuk: serverTimestamp(), // Gunakan Timestamp.now()
      aktivasi: false,
    });
    return {
      status: true,
      statusCode: 200,
      message: "Pengguna berhasil ditambahkan",
    };
  } catch (error) {
    // Tangani error dengan lebih spesifik
    console.error("Error saat mendaftarkan pengguna:", error);
    return {
      status: false,
      statusCode: 500, // Status code 500 untuk internal server error
      message: "Terjadi kesalahan saat mendaftarkan pengguna",
    };
  }
}

export async function resetPassword(data: { id: string; password?: string }) {
  try {
    if (!data.id) {
      return {
        status: false,
        statusCode: 400,
        message: "ID pengguna tidak valid",
      };
    }

    const userDocRef = doc(firestore, "pengguna", data.id);
    let pass;

    if (data.password != null) {
      pass = await bycript.hash(data.password, 10);
      await updateDoc(userDocRef, { password: pass, aktivasi: true });
    } else {
      pass = await bycript.hash("12345", 10);
      await updateDoc(userDocRef, { password: pass, aktivasi: false });
    }
    return {
      status: true,
      statusCode: 200,
      message: "Password berhasil direset",
    };
  } catch (error) {
    console.error("Error resetting password:", error);
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat mereset password",
    };
  }
}
export async function deleteUser(data: { userId: string }) {
  try {
    if (!data.userId) {
      return {
        status: false,
        statusCode: 400,
        message: "ID pengguna tidak valid",
      };
    }

    const userDocRef = doc(firestore, "pengguna", data.userId);
    await deleteDoc(userDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Pengguna berhasil dihapus",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat menghapus pengguna",
    };
  }
}

export async function updateUser(data: {
  id: string;
  nama: string;
  email: string;
  posisi: string;
  status: string;
}) {
  try {
    // 1. Validasi input
    if (!data.id || !data.nama || !data.email || !data.posisi || !data.status) {
      return { status: false, statusCode: 400, message: "Data tidak lengkap" };
    }

    // 2. Verifikasi keberadaan dokumen
    const userDocRef = doc(firestore, "pengguna", data.id);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      return {
        status: false,
        statusCode: 404,
        message: "Pengguna tidak ditemukan",
      };
    }

    // 3. (Opsional) Periksa duplikasi email (kecuali jika email sama dengan yang lama)
    if (userDocSnap.data().email !== data.email) {
      const emailQuery = query(
        collection(firestore, "pengguna"),
        where("email", "==", data.email)
      );
      const emailSnapshot = await getDocs(emailQuery);
      if (!emailSnapshot.empty) {
        return {
          status: false,
          statusCode: 400,
          message: "Email sudah digunakan",
        };
      }
    }

    // 4. Update dokumen
    await updateDoc(userDocRef, data);

    return {
      status: true,
      statusCode: 200,
      message: "Pengguna berhasil diedit",
    };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat mengedit pengguna",
    };
  }
}
