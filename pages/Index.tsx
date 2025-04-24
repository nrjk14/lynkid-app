import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen p-6 bg-pink-50 text-center">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">Selamat Datang di LynKid!</h1>
      <p className="text-lg text-gray-600 mb-6">Pilih jenis pembelajaran:</p>
      <div className="space-y-4">
        <Link href="/game">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
            Main Sekarang
          </button>
        </Link>
        <Link href="/video">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Video Belajar
          </button>
        </Link>
        <Link href="/printable">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Printable
          </button>
        </Link>
      </div>
    </div>
  );
}
