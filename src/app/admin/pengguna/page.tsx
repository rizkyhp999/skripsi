"use client";
import { useState, useEffect } from "react";
import Admin from "@/components/templates/admin";
import { ButtonBiru } from "@/components/molecules/button";
import Modal from "react-modal";
import {
  ModalTambah,
  ModalHapus,
  ModalEdit,
} from "@/components/organisms/modalAdmin/modalPengguna";
import { useRouter } from "next/navigation";
export default function Page() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState<
    "tambah" | "hapus" | "edit" | null
  >(null);
  const [selectUserId, setSelectUserId] = useState("");
  const [selectUserNama, setSelectUserNama] = useState("");
  const [selectUserPosisi, setSelectUserPosisi] = useState("");
  const [selectUserEmail, setSelectUserEmail] = useState("");
  const router = useRouter();
  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModalTambah = () => {
    setModalType("tambah");
  };

  const openModalEdit = (
    userId: string,
    userNama: string,
    userEmail: string,
    userPosisi: string
  ) => {
    setModalType("edit");
    setSelectUserId(userId);
    setSelectUserNama(userNama);
    setSelectUserPosisi(userPosisi);
    setSelectUserEmail(userEmail);
  };
  const openModalHapus = (userId: string, userNama: string) => {
    setModalType("hapus");
    setSelectUserId(userId);
    setSelectUserNama(userNama);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/pengguna");
        if (!res.ok) {
          throw new Error("Gagal mengambil data pengguna");
        }
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  }, []); // Dependensi kosong [] memastikan useEffect hanya berjalan sekali

  if (isLoading) return <p>Loading...</p>; // Tampilkan loading jika data belum siap
  if (error) return <p>Error: {error}</p>; // Tampilkan pesan error jika ada
  console.log(users);
  return (
    <>
      <Admin judul="Data Pengguna">
        <div className="flex justify-end">
          <ButtonBiru onClick={openModalTambah} classname="">
            Tambah
          </ButtonBiru>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Terakhir Masuk
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 &&
                users.map((user: any) => (
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                    key={user.id}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <div className="">
                        <div className="text-base font-semibold">
                          {user.nama}
                        </div>
                        <div className="font-normal text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{user.posisi}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`h-2.5 w-2.5 rounded-full me-2 ${
                            user.status === "Aktif"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        {user.status}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {new Date(
                        user.terakhirmasuk.seconds * 1000
                      ).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 ">
                      <button
                        className="mr-2 text-primer"
                        onClick={() =>
                          openModalEdit(
                            user.id,
                            user.nama,
                            user.email,
                            user.posisi
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="text-[#ff0000]"
                        onClick={() => openModalHapus(user.id, user.nama)}
                      >
                        Hapus
                      </button>

                      {user.aktivasi ? "Aktif" : "Tidak Aktif"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Admin>
      <Modal
        isOpen={modalType !== null} // Modal terbuka jika modalType bukan null
        onRequestClose={closeModal}
        contentLabel={`Modal ${modalType}`}
        overlayClassName="flex justify-center items-center fixed inset-0 bg-black/50 z-50  "
        className="bg-transparent outline-none border-none w-[500px] mx-5"
      >
        {modalType === "tambah" && (
          <ModalTambah
            closeModal={closeModal}
            //Isi modal tambah
          />
        )}
        {modalType === "edit" && (
          <ModalEdit
            closeModal={closeModal}
            selectUserId={selectUserId}
            selectUserNama={selectUserNama}
            selectUserEmail={selectUserEmail}
            selectUserPosisi={selectUserPosisi}
            //Isi modal edit
          />
        )}
        {modalType === "hapus" && (
          <ModalHapus
            closeModal={closeModal}
            selectUserId={selectUserId}
            selectUserNama={selectUserNama}
            //Isi modal hapus
          />
        )}
      </Modal>
    </>
  );
}
