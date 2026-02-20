"use client"; // Wajib ada!

import { useState } from 'react'; // Import useState
import Link from 'next/link';
import { Instagram, Menu, Music2, X, Youtube } from 'lucide-react'; // Tambah icon X (close)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup menu

  return (
    <nav className="fixed top-4 w-full z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center h-20 items-center">
          
          {/* Logo */}
          <div className="absolute left-0 flex-shrink-0">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-emerald-900">
              Heaven<span className="text-amber-500">Trip</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 items-center font-medium text-emerald-950 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full px-7 py-3 shadow-lg">
            <Link href="/" className="hover:text-amber-600 transition">Beranda</Link>
            <Link href="#paket" className="hover:text-amber-600 transition">Paket Umroh</Link>
            <Link href="#haji" className="hover:text-amber-600 transition">Haji Plus</Link>
            <Link href="#tentang" className="hover:text-amber-600 transition">Tentang Kami</Link>
            <Link href="#Testimoni" className="hover:text-amber-600 transition">Testimoni</Link>
          </div>

          {/* Desktop Social */}
          <div className="hidden md:flex absolute right-0 items-center gap-2">
            <Link href="https://instagram.com" className="p-2.5 rounded-full border border-white/40 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 text-white shadow-md hover:scale-105 transition">
              <Instagram size={18} />
            </Link>
            <Link href="https://tiktok.com" className="p-2.5 rounded-full border border-white/40 bg-black text-cyan-300 shadow-md hover:scale-105 transition relative">
              <Music2 size={18} />
            </Link>
            <Link href="https://youtube.com" className="p-2.5 rounded-full border border-white/40 bg-red-600 text-white shadow-md hover:scale-105 transition">
              <Youtube size={18} />
            </Link>
          </div>

          <div className="absolute right-0 md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-950 focus:outline-none bg-white/20 backdrop-blur-xl border border-white/40 p-3 rounded-xl shadow-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Muncul hanya saat isOpen true) */}
      {isOpen && (
        <div className="md:hidden absolute w-full left-0 top-24 animate-in fade-in slide-in-from-top-5 px-4">
          <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-4 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-emerald-950 font-bold border-b border-white/40">Beranda</Link>
            <Link href="#paket" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-emerald-950 font-bold border-b border-white/40">Paket Umroh</Link>
            <Link href="#haji" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-emerald-950 font-bold border-b border-white/40">Haji Plus</Link>
            <Link href="#tentang" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-emerald-950 font-bold">Tentang Kami</Link>
            <div className="pt-2 flex items-center gap-3">
              <Link href="https://instagram.com" className="p-2.5 rounded-full border border-white/40 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 text-white shadow-md hover:scale-105 transition">
                <Instagram size={20} />
              </Link>
              <Link href="https://tiktok.com" className="p-2.5 rounded-full border border-white/40 bg-black text-cyan-300 shadow-md hover:scale-105 transition relative">
                <Music2 size={20} />
              </Link>
              <Link href="https://youtube.com" className="p-2.5 rounded-full border border-white/40 bg-red-600 text-white shadow-md hover:scale-105 transition">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
