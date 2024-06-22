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
  judul?: string;
  infografikId?: string;
}

export function ModalTambah({ closeModal }: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [judul, setJudul] = useState(""); // New state for altText
  const [uploadProgress, setUploadProgress] = useState(0); // State for tracking progress

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedImages || selectedImages.length === 0) {
      setError("No images selected");
      return;
    }

    setIsLoading(true);

    try {
      const downloadURLs: string[] = [];

      for (const image of selectedImages) {
        const storageRef = ref(storage, `${judul}/${image.name}`);
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
              downloadURLs.push(downloadURL);
              resolve();
            }
          );
        });
      }

      // Send downloadURLs to your API (replace with your actual API endpoint)
      const res = await fetch("/api/infografik", {
        method: "POST",
        body: JSON.stringify({
          gambar: downloadURLs,
          judul: judul,
        }),
      });
      // Handle API response (e.g., close modal, show success message)
    } catch (error) {
      console.error("Error handling uploads:", error);
      setError("Error uploading images");
    } finally {
      setIsLoading(false);
      setUploadProgress(0); // Reset progress after upload
      closeModal();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setSelectedImages([...selectedImages, ...newImages]);

      // Update preview images
      const newPreviews = newImages.map((file) => URL.createObjectURL(file));
      setPreviewImages([...previewImages, ...newPreviews]);
    }
  };

  return (
    <>
      <form
        className="relative bg-white rounded-lg shadow-md max-w-2xl max-h-full p-6"
        onSubmit={handleSubmit}
      >
        {/* Gambar Section */}
        <div className="mb-4">
          <label
            htmlFor="gambar"
            className="block text-gray-700 font-medium mb-2"
          >
            Gambar
          </label>
          <input
            type="file"
            name="gambar"
            id="gambar"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Alt Text Section */}
        <div className="mb-4">
          <label
            htmlFor="judul"
            className="block text-gray-700 font-medium mb-2"
          >
            Judul :
          </label>
          <input
            type="text"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Image Previews */}
        <div className="flex flex-wrap gap-4 mb-4">
          {previewImages.map((previewUrl, index) => (
            <Image
              key={index}
              src={previewUrl}
              alt={`Preview ${index + 1}`}
              width={100}
              height={100}
              className="rounded-md object-cover" // Added object-cover
            />
          ))}
        </div>
        {isLoading && (
          <div className="mb-4">
            {selectedImages.map((image, index) => (
              <div key={index}>
                <p className="text-center text-gray-500 mb-1">{image.name}</p>
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

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center animate-pulse mb-4">{error}</p>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end">
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

export function ModalHapus({ closeModal, judul, infografikId }: data) {
  const [error, setError] = useState<string | null>(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  // const [infografik, setInfografik] = useState<InfografikData>();
  const handleHapus = async (e: any) => {
    setIsLoadingDelete(true);
    setError(null);
    const res = await fetch("/api/infografik", {
      method: "DELETE",
      body: JSON.stringify({
        infografikId: infografikId,
        judul: judul,
      }),
    });

    closeModal();
    setIsLoadingDelete(false);
  };
  return (
    <>
      <div className="relative w-full max-w-2xl max-h-full ">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Hapus Pengguna</h2>
          <p className="text-gray-600 mb-6">
            Apakah Anda yakin ingin menghapus pengguna{" "}
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
