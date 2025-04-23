import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-orange-500 mb-2">lynkid</h1>
        <p className="text-lg text-gray-700">Belajar seru untuk anak usia dini!</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">Game Edukasi</h2>
            <p className="mb-4">Mainkan game seru seperti Cocokkan Warna, Bentuk, dan Suara Hewan.</p>
            <Link href="/game">
              <Button>Main Sekarang</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Video Belajar</h2>
            <p className="mb-4">Tonton video singkat mengenal warna, angka, huruf dan emosi.</p>
            <Link href="/video">
              <Button>Tonton Video</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Printable Gratis</h2>
            <p className="mb-4">Unduh worksheet tracing huruf, angka, dan mewarnai gratis!</p>
            <Link href="/printable">
              <Button>Unduh Sekarang</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        © 2025 lynkid - PintarMain untuk Anak Indonesia
      </footer>
    </div>
  );
}
