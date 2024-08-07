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
} from "firebase/firestore";

import { listAll, ref, deleteObject } from "firebase/storage";
import app from "./init";
import bycript from "bcrypt";
import { storage } from "./init";

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

export async function register(data: {
  data: any;
  nama: string;
  email: string;
  password: string;
  posisi: string;
  status: string;
  terakhirmasuk: any;
  aktivasi: boolean;
}) {
  const q = query(
    collection(firestore, "pengguna"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const pengguna = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (pengguna.length > 0) {
    return { status: false, statusCode: 400, message: "Pengguna sudah ada" };
  } else {
    data.nama = data.nama;
    data.password = await bycript.hash("12345", 10);
    data.email = data.email;
    data.posisi = data.posisi;
    data.status = "Aktif";
    data.terakhirmasuk = serverTimestamp();
    data.aktivasi = false;

    try {
      await addDoc(collection(firestore, "pengguna"), data);
      return { status: true, statusCode: 200, message: "Pengguna ditambahkan" };
    } catch (error) {
      return { status: false, statusCode: 400, message: "Pengguna sudah ada" };
    }
  }
}

export async function deleteUser(data: { userId: string }) {
  try {
    // 1. Reference the specific user document
    const userDocRef = doc(firestore, "pengguna", data.userId);

    // 2. Delete the document
    await deleteDoc(userDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Pengguna berhasil dihapus",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500, // Use 500 for server errors
      message: "Terjadi kesalahan saat menghapus pengguna",
    };
  }
}

export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "pengguna"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user.length > 0) {
    const userId = user[0].id; // Get the user's document ID

    // Update the "terakhirMasuk" field with the current server timestamp
    const userRef = doc(firestore, "pengguna", userId);

    await updateDoc(userRef, { terakhirMasuk: serverTimestamp() });

    return user[0];
  } else {
    return null;
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
    // 1. Reference the specific user document
    const userDocRef = doc(firestore, "pengguna", data.id);

    await updateDoc(userDocRef, data);

    return {
      status: true,
      statusCode: 200,
      message: "Pengguna diedit",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500, // Use 500 for server errors
      message: "Terjadi kesalahan saat edit pengguna",
    };
  }
}

export async function resetPassword(data: { id: string; password?: string }) {
  try {
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
      message: "Password berhasil direset. Password baru:",
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
export async function addVitalitas(data: {
  data: any;
  bahasa: string;
  provinsi: string;
  kabupaten_kota: string;
  indeks: number;
  tahun: number;
  pewarisan_antargenerasi: number;
  jumlah_dan_proporsi_penutur: number;
  ranah_penggunaan_bahasa: number;
  respons_terhadap_ranah_dan_media_baru: number;
  bahan_ajar_bahasa_dan_literasi: number;
  sikap_pemerintah_dan_regulasi: number;
  sikap_penutur: number;
  jenis_dan_kualitas_dokumentasi: number;
  kedwibahasaan: number;
  kontak_bahasa: number;
}) {
  data.bahasa = data.bahasa;
  data.provinsi = data.provinsi;
  data.kabupaten_kota = data.kabupaten_kota;
  data.indeks = data.indeks;
  data.tahun = data.tahun;
  data.pewarisan_antargenerasi = data.pewarisan_antargenerasi;
  data.jumlah_dan_proporsi_penutur = data.jumlah_dan_proporsi_penutur;
  data.ranah_penggunaan_bahasa = data.ranah_penggunaan_bahasa;
  data.respons_terhadap_ranah_dan_media_baru =
    data.respons_terhadap_ranah_dan_media_baru;
  data.bahan_ajar_bahasa_dan_literasi = data.bahan_ajar_bahasa_dan_literasi;
  data.sikap_pemerintah_dan_regulasi = data.sikap_pemerintah_dan_regulasi;
  data.sikap_penutur = data.sikap_penutur;
  data.jenis_dan_kualitas_dokumentasi = data.jenis_dan_kualitas_dokumentasi;
  data.kedwibahasaan = data.kedwibahasaan;
  data.kontak_bahasa = data.kontak_bahasa;
  try {
    await addDoc(collection(firestore, "vitalitas"), data);
    return { status: true, statusCode: 200, message: "Pengguna ditambahkan" };
  } catch (error) {
    return { status: false, statusCode: 400, message: "Pengguna sudah ada" };
  }
}

export async function updateVitalitas(data: {
  id: string;
  bahasa: string;
  provinsi: string;
  kabupaten_kota: string;
  indeks: number;
  tahun: number;
  pewarisan_antargenerasi: number;
  jumlah_dan_proporsi_penutur: number;
  ranah_penggunaan_bahasa: number;
  respons_terhadap_ranah_dan_media_baru: number;
  bahan_ajar_bahasa_dan_literasi: number;
  sikap_pemerintah_dan_regulasi: number;
  sikap_penutur: number;
  jenis_dan_kualitas_dokumentasi: number;
  kedwibahasaan: number;
  kontak_bahasa: number;
}) {
  try {
    // 1. Reference the specific user document
    const userDocRef = doc(firestore, "vitalitas", data.id);

    await updateDoc(userDocRef, data);

    return {
      status: true,
      statusCode: 200,
      message: "Pengguna diedit",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500, // Use 500 for server errors
      message: "Terjadi kesalahan saat edit pengguna",
    };
  }
}

export async function deleteVitalitas(data: { vitalitasId: string }) {
  try {
    // 1. Reference the specific user document
    const userDocRef = doc(firestore, "vitalitas", data.vitalitasId);

    // 2. Delete the document
    await deleteDoc(userDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Bahasa berhasil dihapus",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500, // Use 500 for server errors
      message: "Terjadi kesalahan saat menghapus bahasa",
    };
  }
}

export async function addInfografik(data: { judul: string; gambar: string[] }) {
  try {
    await addDoc(collection(firestore, "infografik"), data);
    return { status: true, statusCode: 200, message: "Pengguna ditambahkan" };
  } catch (error) {
    return { status: false, statusCode: 400, message: "Pengguna sudah ada" };
  }
}

export async function deleteInfografik(data: { infografikId: string }) {
  try {
    // 1. Reference the specific user document
    const userDocRef = doc(firestore, "infografik", data.infografikId);
    // 2. Delete the document
    await deleteDoc(userDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Infografik berhasil dihapus",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500, // Use 500 for server errors
      message: "Terjadi kesalahan saat menghapus infografik",
    };
  }
}

export async function deleteFolder(folderPath: string) {
  const folderRef = ref(storage, folderPath);

  // List semua item dalam folder
  const listResult = await listAll(folderRef);

  // Hapus semua item dalam folder (file dan subfolder)
  const deletePromises = listResult.items.map((itemRef) =>
    deleteObject(itemRef)
  );
  await Promise.all(deletePromises);
}

export async function addCarousel(data: {
  gambar: string[];
  judul: string;
  deskripsi: string;
}) {
  try {
    await addDoc(collection(firestore, "carousel"), data);
    return { status: true, statusCode: 200, message: "Carousel ditambahkan" };
  } catch (error) {
    return { status: false, statusCode: 400, message: "Carousel sudah ada" };
  }
}

export async function updateCarousel(data: {}) {}

export async function deleteCarousel(data: {
  carouselId: string;
  judul?: string;
}) {
  try {
    // 1. Reference the specific user document
    const userDocRef = doc(firestore, "carousel", data.carouselId);
    // 2. Delete the document
    await deleteDoc(userDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Carousel berhasil dihapus",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500, // Use 500 for server errors
      message: "Terjadi kesalahan saat menghapus carousel",
    };
  }
}
