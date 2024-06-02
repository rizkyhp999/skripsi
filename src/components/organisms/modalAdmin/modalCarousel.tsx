import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { storage } from "../../../lib/firebase/init";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTaskSnapshot,
  listAll,
  deleteObject,
} from "firebase/storage";
import Modal from "react-modal";

interface data {
  closeModal: () => void;
  carouselId?: string;
  judul?: string;
}

export function ModalTambah({ closeModal }: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [judul, setJudul] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0); // State for tracking progress

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImage = files[0]; // Get the first file only
      setSelectedImages([newImage]); // Replace existing image

      // Update preview image
      const newPreview = URL.createObjectURL(newImage);
      setPreviewImages([newPreview]); // Replace existing preview
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!selectedImages || selectedImages.length === 0) {
      setError("No image selected");
      return;
    }

    setIsLoading(true);

    try {
      const image = selectedImages[0]; // Get the first image only
      const storageRef = ref(storage, `${e.target.judul.value}/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      await new Promise<void>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot: UploadTaskSnapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error("Error uploading image:", error);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            // Send downloadURL to your API (replace with your actual API endpoint)
            const res = await fetch("/api/carousel", {
              method: "POST",
              body: JSON.stringify({
                gambar: downloadURL,
                judul: e.target.judul.value,
                deskripsi: e.target.deskripsi.value,
              }),
            });
            // Handle API response (e.g., close modal, show success message)
            resolve();
          }
        );
      });
    } catch (error) {
      console.error("Error handling upload:", error);
      setError("Error uploading image");
    } finally {
      setIsLoading(false);
      setUploadProgress(0); // Reset progress after upload
      closeModal();
      location.reload();
    }
  };

  return (
    <>
      <form
        className="relative bg-white rounded-lg shadow-md max-w-full max-h-full p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row space-x-4">
          {" "}
          {/* Added space-x-4 for horizontal spacing */}
          <div className="w-1/2">
            {" "}
            {/* Set width for image section */}
            <div className="mb-4">
              <label
                htmlFor="gambar"
                className="block text-gray-700 font-medium mb-2"
              >
                Gambar
              </label>
              <div className="relative" hidden>
                <input
                  type="file"
                  name="gambar"
                  id="gambar"
                  accept="image/*"
                  placeholder="Pilih gambar..."
                  onChange={handleImageChange}
                  hidden
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 file:hidden" // Added file:hidden
                />
              </div>
              <label htmlFor="gambar" className="cursor-pointer">
                <Image
                  src={previewImages[0] || "/komponen/tambahGambar.png"}
                  alt={`Preview`}
                  width={300}
                  height={300}
                  className="rounded-md object-cover border"
                />
              </label>
            </div>
          </div>
          <div className="w-1/2">
            {" "}
            {/* Set width for text input section */}
            <div className="mb-4">
              <label
                htmlFor="judul"
                className="block text-gray-700 font-medium mb-2"
              >
                Judul:
              </label>
              <input
                type="text"
                id="judul"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 shadow-sm" // Added shadow-sm
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="deskripsi"
                className="block text-gray-700 font-medium mb-2"
              >
                Deskripsi:
              </label>
              <textarea
                id="deskripsi"
                rows={4} // Set initial rows to 4
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 shadow-sm resize-y" // Added shadow-sm and resize-y
              />
            </div>
            <label
              htmlFor="gambar" // Hubungkan label dengan input file
              className="block w-full bg-white border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200 py-2 px-4 text-center cursor-pointer"
            >
              {selectedImages.length > 0 ? "Ganti Gambar" : "Pilih Gambar"}
            </label>
            {isLoading && (
              <div className="mb-4">
                {selectedImages.map((image, index) => (
                  <div key={index}>
                    <p className="text-center text-gray-500 mb-1">
                      {image.name}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }} // Gunakan progress yang sama untuk semua gambar
                      ></div>
                    </div>
                    <p className="text-center text-gray-500 mt-1">{`${Math.round(
                      uploadProgress
                    )}%`}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center animate-pulse mb-4">{error}</p>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-primer hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Simpan"}
          </button>
          <button
            type="button"
            className="ml-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md focus:outline-none"
            onClick={closeModal}
          >
            Batal
          </button>
        </div>
      </form>
    </>
  );
}

export function ModalEdit() {
  return <div>wakwau</div>;
}

export function ModalHapus({ closeModal, carouselId, judul }: data) {
  const [error, setError] = useState<string | null>(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  // const [infografik, setInfografik] = useState<InfografikData>();
  const handleHapus = async (e: any) => {
    setIsLoadingDelete(true);
    setError(null);
    const res = await fetch("/api/carousel", {
      method: "DELETE",
      body: JSON.stringify({
        carouselId: carouselId,
        judul: judul,
      }),
    });

    closeModal();
    setIsLoadingDelete(false);
    location.reload();
  };
  return (
    <>
      <div className="relative w-full max-w-2xl max-h-full ">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Hapus Pengguna</h2>
          <p className="text-gray-600 mb-6">
            Apakah Anda yakin ingin menghapus carousel dengan judul{" "}
            <span className="font-bold">{judul}</span>? Tindakan ini tidak dapat
            diurungkan.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
              onClick={handleHapus}
              disabled={isLoadingDelete}
            >
              {isLoadingDelete ? "Menghapus..." : "Hapus"}
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              onClick={closeModal}
            >
              Batal
            </button>
          </div>

          {error && (
            <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}
