import React from "react";

export default function GamePage() {
  return (
    <div className="min-h-screen p-6 bg-purple-50 text-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Game Edukasi</h1>
      <p className="text-lg text-gray-600">Pilih salah satu game di bawah ini untuk bermain!</p>

      <div className="mt-6 space-y-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
          Cocokkan Warna
        </button>
        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded">
          Bentuk & Suara Hewan
        </button>
      </div>
    </div>
  );
}
