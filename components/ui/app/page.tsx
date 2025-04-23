import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Selamat Datang!</h1>
        <p className="text-gray-600">Ini adalah demo app edukasi anak usia dini.</p>
        <Button onClick={() => alert("Yay! Ini tombolnya!")}>Mulai Belajar</Button>
      </div>
    </main>
  );
}
