import Image from "next/image";
import { useState, ChangeEvent } from "react";
import Modal from "react-modal";

interface data {
  closeModal: () => void;
}

export function ModalTambah({ closeModal }: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const gambar = selectedImages.map((image) => image.name);
    console.log(selectedImages);
    try {
      const res = await fetch("/api/infografik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gambar,
          altText: "wakwau  ",
        }),
      });

      if (res.ok) {
        closeModal();
        // Refresh UI or state (consider a more targeted update)
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Error adding infographic");
      }
    } catch (error) {
      console.error("Error adding infographic:", error);
      setError("Error adding infographic");
    } finally {
      setIsLoading(false);
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
        className="relative bg-white rounded-lg shadow max-w-2xl max-h-full"
        onSubmit={handleSubmit}
      >
        {/* Input and Preview Area */}
        <label htmlFor="gambar" className="block mb-2">
          Gambar
        </label>
        <input
          type="file"
          name="gambar"
          id="gambar"
          accept="image/*"
          multiple
          onChange={handleImageChange} // Handle image selection here
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
        />
        <div className="flex flex-wrap gap-4">
          {previewImages.map((previewUrl, index) => (
            <Image
              key={index}
              src={previewUrl}
              alt={`Preview ${index + 1}`}
              width={100}
              height={100}
              className="rounded-md"
            />
          ))}
        </div>
        <div className="flex items-center justify-center mb-2">
          {error && (
            <p className="text-red-500 animate-pulse max-auto">{error}</p>
          )}
        </div>
        <div className="flex justify-end items-center p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
          <button
            className="px-4 py-2 bg-primer text-white rounded hover:bg-[#0074AB] disabled:opacity-50 "
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Simpan"}
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
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

export function ModalHapus({ closeModal }: data) {
  return <div>wakwau</div>;
}
