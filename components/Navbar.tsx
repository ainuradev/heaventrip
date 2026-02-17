import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-emerald-900 tracking-tight">
              AL-HARAMAIN <span className="text-amber-500 text-sm block leading-3">TRAVEL UMROH</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-emerald-900">
            <Link href="/" className="hover:text-amber-600 transition">Beranda</Link>
            <Link href="#paket" className="hover:text-amber-600 transition">Paket Umroh</Link>
            <Link href="#haji" className="hover:text-amber-600 transition">Haji Plus</Link>
            <Link href="#tentang" className="hover:text-amber-600 transition">Tentang Kami</Link>
            
            <Link href="https://wa.me/62812345678" className="bg-emerald-700 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-emerald-800 transition shadow-md">
              <Phone size={18} />
              Konsultasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu className="text-emerald-900" />
          </div>
        </div>
      </div>
    </nav>
  );
}