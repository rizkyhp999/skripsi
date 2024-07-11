import React from "react";
import Image from "next/image";
interface Book {
  title: string;
  editors: string;
  year: number;
  publisher: string;
  location: string;
  isbn: string;
  image: string;
  downloadLink: string;
}
const book: Book = {
  title: "Pedoman konservasi dan revitalisasi bahasa",
  editors: "Mustakim, Mustakim and Prihartono, Wawan, eds.",
  year: 2017,
  publisher:
    "Badan Pengembangan dan Pembinaan Bahasa, Kementerian Pendidikan dan Kebudayaan RI",
  location: "Jakarta",
  isbn: "9786024373405",
  image: "/Pedoman_2017.png", // Ganti dengan path gambar yang sesuai
  downloadLink: "/Pedoman_2017.pdf", // Ganti dengan path file unduhan yang sesuai
};
export default function page() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen p-6">
        <div className="p-6 max-w-lg bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
          <Image
            src={book.image}
            alt={book.title}
            width={500}
            height={700}
            className="mb-4 w-full h-auto rounded-md"
          />
          <p className="mb-2">
            <strong>Editors:</strong> {book.editors}
          </p>
          <p className="mb-2">
            <strong>Year:</strong> {book.year}
          </p>
          <p className="mb-2">
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p className="mb-2">
            <strong>Location:</strong> {book.location}
          </p>
          <p className="mb-2">
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <a href={book.downloadLink} className="text-blue-500 hover:underline">
            Download PDF
          </a>
        </div>
      </div>
    </>
  );
}
