import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

interface InfografikProps {
  gambar: string[];
  altText: string;
  key?: number;
}

const GambarInfografik: React.FC<InfografikProps> = ({
  gambar,
  altText,
  key,
}) => {
  const [gambarAktif, setGambarAktif] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGambarClick = (index: number) => {
    setGambarAktif(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveAllImages = () => {
    gambar.forEach((namaFile) => {
      const link = document.createElement("a");
      link.href = `/infografik/${namaFile}`;
      link.download = namaFile;
      link.click();
    });
  };
  const handleNextImage = () => {
    setGambarAktif((gambarAktif + 1) % gambar.length);
  };

  const handlePrevImage = () => {
    setGambarAktif((gambarAktif - 1 + gambar.length) % gambar.length);
  };

  return (
    <div className="infografik-container  ">
      <Image
        src={`/infografik/${gambar[gambarAktif]}`}
        alt={`${altText} - Gambar ${gambarAktif + 1}`}
        width={250}
        height={300}
        onClick={() => handleGambarClick(gambarAktif)}
        className=" shadow-xl border h-96" // Tambahkan kelas Tailwind h-96
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Infografik Popup"
        overlayClassName="flex justify-center items-center fixed inset-0 bg-black/50 z-50  "
        className="bg-transparent outline-none border-none"
      >
        <div className="flex flex-row items-center justify-center relative ">
          {gambarAktif > 0 && (
            <div>
              <Image
                src={`/infografik/${gambar[gambarAktif - 1]}`}
                alt="Preview gambar sebelumnya"
                width={100}
                height={150}
                className="mr-4 opacity-50 hover:opacity-100 cursor-pointer hidden lg:block"
                onClick={handlePrevImage}
              />
              <button
                onClick={handlePrevImage}
                className="mr-4 text-6xl lg:hidden text-white"
              >
                {"<"} {/* Tombol panah kiri */}
              </button>
            </div>
          )}
          <div className=" w-full max-w-md">
            <div className="relative flex flex-row items-center justify-between mt-10">
              <button
                onClick={closeModal}
                className="  flex flex-col text-xl text-white items-center justify-center"
              >
                <Image
                  src={`/komponen/ikon/Tutup.svg`}
                  alt="unduh"
                  width={40}
                  height={40}
                ></Image>
                Tutup
              </button>
              <button
                onClick={handleSaveAllImages}
                className=" flex flex-col text-xl text-white items-center justify-center "
              >
                <Image
                  src={`/komponen/ikon/Unduh.svg`}
                  alt="unduh"
                  width={40}
                  height={40}
                ></Image>
                Unduh
              </button>
            </div>
            <a
              href={`/infografik/${gambar[gambarAktif]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Tambahkan tautan */}
              <Image
                key={gambarAktif}
                src={`/infografik/${gambar[gambarAktif]}`}
                alt={`${altText} - Gambar ${gambarAktif + 1}`}
                width={400}
                height={600}
                priority={true}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                className="w-full h-auto"
              />
            </a>
          </div>
          {gambarAktif < gambar.length - 1 && (
            <div>
              <Image
                src={`/infografik/${gambar[gambarAktif + 1]}`}
                alt="Preview gambar selanjutnya"
                width={100}
                height={150}
                className="ml-4 opacity-50 hover:opacity-100 cursor-pointer hidden lg:block"
                onClick={handleNextImage}
              />
              <button
                onClick={handleNextImage}
                className="ml-4 text-6xl lg:hidden text-white"
              >
                {">"} {/* Tombol panah kanan */}
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default GambarInfografik;
