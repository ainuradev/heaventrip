import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Kolom 1: Brand & Izin */}
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-bold text-white tracking-tight">
            HeavenTrip
          </span>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Penyelenggara Perjalanan Ibadah Umroh (PPIU) Resmi. Berkhidmat untuk tamu-tamu Allah dengan sepenuh hati.
          </p>
          <div className="mt-4 p-3 border border-emerald-800 rounded-lg">
            <p className="text-xs text-amber-500 font-bold uppercase">Izin PPIU Kemenag</p>
            <p className="text-sm">No. 123 Tahun 2024</p>
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="font-bold text-lg mb-6">Layanan</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition">Umroh Reguler</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Umroh Plus Turki</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Haji Plus & Furoda</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Badal Umroh</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <span>Jl. Raya Ibadah No. 77, Jakarta Selatan, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500 shrink-0" />
              <span>info@heaventrip.com</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Sosial Media */}
        <div>
          <h4 className="font-bold text-lg mb-6">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-emerald-900 p-3 rounded-full hover:bg-amber-600 transition"><Instagram size={20}/></a>
            <a href="#" className="bg-emerald-900 p-3 rounded-full hover:bg-amber-600 transition"><Facebook size={20}/></a>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            Terdaftar di HIMPUH (Himpunan Penyelenggara Umrah dan Haji)
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-emerald-900 text-center text-sm text-gray-500">
        © 2024 HeavenTrip. All Rights Reserved. Built with Next.js.
      </div>
    </footer>
  );
}
