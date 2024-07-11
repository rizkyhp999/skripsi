import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

interface InfografikProps {
  gambar: string[];
  judul: string;
  key?: number;
}

const GambarInfografik: React.FC<InfografikProps> = ({
  gambar,
  judul,
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
    setGambarAktif((gambarAktif + 1) % gambar.length); // Loop kembali ke awal jika mencapai akhir
  };

  const handlePrevImage = () => {
    setGambarAktif((gambarAktif - 1 + gambar.length) % gambar.length); // Loop kembali ke akhir jika mencapai awal
  };

  return (
    <div className="infografik-container  ">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={gambar[gambarAktif]}
          alt={`${judul} - Gambar ${gambarAktif + 1}`}
          width={250}
          height={300}
          onClick={() => handleGambarClick(gambarAktif)}
          className=" shadow-xl border h-80 " // Tambahkan kelas Tailwind h-96
        />
        <h1 className=" mt-5 text-xl">{judul}</h1>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Infografik Popup"
        overlayClassName="flex justify-center items-center fixed inset-0 bg-black/50 z-50   "
        className="bg-transparent outline-none border-none"
      >
        <div className="flex flex-row items-center justify-center relative ">
          <Image
            src={gambar[(gambarAktif - 1 + gambar.length) % gambar.length]}
            alt="Preview gambar sebelumnya"
            width={100}
            height={150}
            className="mr-10 opacity-50 hover:opacity-100 cursor-pointer hidden lg:block"
            onClick={handlePrevImage}
          />
          <button
            onClick={handlePrevImage}
            className="mr-4 text-6xl lg:hidden text-white"
          >
            {"<"} {/* Tombol panah kiri */}
          </button>

          <div className=" w-full max-w-md">
            <a
              href={gambar[gambarAktif]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              {" "}
              {/* Tambahkan tautan */}
              <Image
                key={gambarAktif}
                src={gambar[gambarAktif]}
                alt={`${judul} - Gambar ${gambarAktif + 1}`}
                width={400}
                height={500}
                priority={true}
              />
            </a>
          </div>

          <Image
            src={gambar[(gambarAktif + 1) % gambar.length]}
            alt="Preview gambar selanjutnya"
            width={100}
            height={150}
            className="ml-10 opacity-50 hover:opacity-100 cursor-pointer hidden lg:block"
            onClick={handleNextImage}
          />
          <button
            onClick={handleNextImage}
            className="ml-4 text-6xl lg:hidden text-white"
          >
            {">"} {/* Tombol panah kanan */}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export function GambarStatus() {
  return <div>gambar</div>;
}

export default GambarInfografik;
