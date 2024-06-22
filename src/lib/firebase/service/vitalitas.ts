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

export async function addVitalitas(data: {
  createdAt: Timestamp;
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
  try {
    // 2. Tambahkan createdAt (opsional)
    data.createdAt = Timestamp.now();

    // 3. Tambahkan data ke Firestore
    await addDoc(collection(firestore, "vitalitas"), data);
    return {
      status: true,
      statusCode: 200,
      message: "Data vitalitas berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error adding vitalitas data:", error);
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat menambahkan data vitalitas",
    };
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
    // 2. Verifikasi keberadaan dokumen
    const vitalitasDocRef = doc(firestore, "vitalitas", data.id);
    const vitalitasDocSnap = await getDoc(vitalitasDocRef);

    if (!vitalitasDocSnap.exists()) {
      return {
        status: false,
        statusCode: 404,
        message: "Data vitalitas tidak ditemukan",
      };
    }

    // 3. Update dokumen
    await updateDoc(vitalitasDocRef, data);

    return {
      status: true,
      statusCode: 200,
      message: "Data vitalitas berhasil diperbarui",
    };
  } catch (error) {
    console.error("Error updating vitalitas data:", error);
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat memperbarui data vitalitas",
    };
  }
}

export async function deleteVitalitas(data: { vitalitasId: string }) {
  try {
    // 1. Validasi ID (opsional)
    if (!data.vitalitasId) {
      return {
        status: false,
        statusCode: 400,
        message: "ID vitalitas tidak valid",
      };
    }

    // 2. Reference the specific vitalitas document
    const vitalitasDocRef = doc(firestore, "vitalitas", data.vitalitasId);

    // 3. Delete the document
    await deleteDoc(vitalitasDocRef);

    return {
      status: true,
      statusCode: 200,
      message: "Data vitalitas berhasil dihapus", // Memperbaiki pesan respons
    };
  } catch (error) {
    console.error("Error deleting vitalitas data:", error); // Menambahkan log error
    return {
      status: false,
      statusCode: 500,
      message: "Terjadi kesalahan saat menghapus data vitalitas", // Memperbaiki pesan error
    };
  }
}
