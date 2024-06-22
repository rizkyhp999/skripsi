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

export async function addInfografik(data: {
  createdAt: Timestamp;
  judul: string;
  gambar: string[];
}) {
  try {
    // 1. Validasi input (opsional)
    if (
      !data.judul ||
      !Array.isArray(data.gambar) ||
      data.gambar.length === 0
    ) {
      return {
        status: false,
        statusCode: 400,
        message: "Data tidak lengkap atau tidak valid",
      };
    }

    // 2. Tambahkan createdAt (opsional)
    data.createdAt = Timestamp.now();

    // 3. Tambahkan data ke Firestore
    await addDoc(collection(firestore, "infografik"), data);
    return {
      status: true,
      statusCode: 200,
      message: "Infografik berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error adding infografik data:", error); // Mencatat detail error
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat menambahkan infografik",
    };
  }
}

export async function deleteInfografik(data: { infografikId: string }) {
  try {
    // 1. Validasi Input
    if (!data.infografikId) {
      return {
        status: false,
        statusCode: 400,
        message: "ID infografik tidak valid",
      };
    }

    // 2. Reference Dokumen Infografik
    const infografikDocRef = doc(firestore, "infografik", data.infografikId);

    // 3. Verifikasi Keberadaan Dokumen (Opsional)
    const infografikDocSnap = await getDoc(infografikDocRef);
    if (!infografikDocSnap.exists()) {
      return {
        status: false,
        statusCode: 404,
        message: "Infografik tidak ditemukan",
      };
    }

    // 4. Hapus Dokumen
    await deleteDoc(infografikDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Infografik berhasil dihapus",
    };
  } catch (error) {
    console.error("Error deleting infografik data:", error);
    return {
      status: false,
      statusCode: 500,
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
  createdAt: Timestamp;
  gambar: string[];
  judul: string;
  deskripsi: string;
}) {
  try {
    // 1. Validasi Input

    // 2. Tambahkan createdAt (opsional)
    data.createdAt = Timestamp.now();

    // 3. Tambahkan data ke Firestore
    await addDoc(collection(firestore, "carousel"), data);
    return {
      status: true,
      statusCode: 200,
      message: "Carousel berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error adding carousel data:", error);
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat menambahkan carousel",
    };
  }
}

export async function deleteCarousel(data: { carouselId: string }) {
  try {
    // 1. Validasi Input
    if (!data.carouselId) {
      return {
        status: false,
        statusCode: 400,
        message: "ID carousel tidak valid",
      };
    }

    // 2. Reference Dokumen Carousel
    const carouselDocRef = doc(firestore, "carousel", data.carouselId);

    // 3. Verifikasi Keberadaan Dokumen (Opsional)
    const carouselDocSnap = await getDoc(carouselDocRef);
    if (!carouselDocSnap.exists()) {
      return {
        status: false,
        statusCode: 404,
        message: "Carousel tidak ditemukan",
      };
    }

    // 4. Hapus Dokumen
    await deleteDoc(carouselDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Carousel berhasil dihapus",
    };
  } catch (error) {
    console.error("Error deleting carousel data:", error);
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat menghapus carousel",
    };
  }
}
