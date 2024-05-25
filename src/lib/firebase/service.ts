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
} from "firebase/firestore";
import app from "./init";
import bycript from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

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

  if (user) {
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

export async function resetPassword(data: { id: string }) {
  try {
    const userDocRef = doc(firestore, "pengguna", data.id);
    const password = await bycript.hash("12345", 10);
    await updateDoc(userDocRef, { password: password, aktivasi: true });
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

// export async function updateUser(
//   userId: string,
//   updatedData: {
//     nama?: string; // Make fields optional for partial updates
//     email?: string;
//     posisi?: string;
//   }
// ) {
//   try {
//     // 1. Reference the specific user document
//     const userDocRef = doc(firestore, "pengguna", userId);

//     // 2. Check if email is being updated and if it's already in use by another user
//     if (updatedData.email) {
//       const emailQuery = query(
//         collection(firestore, "pengguna"),
//         where("email", "==", updatedData.email),
//         where("id", "!=", userId) // Exclude the current user
//       );
//       const emailSnapshot = await getDocs(emailQuery);
//       if (!emailSnapshot.empty) {
//         return {
//           status: false,
//           statusCode: 400,
//           message: "Email sudah digunakan oleh pengguna lain",
//         };
//       }
//     }

//     // 3. Prepare updated data (remove undefined fields)
//     const dataToUpdate = Object.fromEntries(
//       Object.entries(updatedData).filter(([_, value]) => value !== undefined)
//     );

//     // 4. Update the document
//     await updateDoc(userDocRef, dataToUpdate);

//     return {
//       status: true,
//       statusCode: 200,
//       message: "Pengguna berhasil diperbarui",
//     };
//   } catch (error) {
//     return {
//       status: false,
//       statusCode: 500,
//       message: "Terjadi kesalahan saat memperbarui pengguna",
//     };
//   }
// }
