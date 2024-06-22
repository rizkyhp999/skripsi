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
