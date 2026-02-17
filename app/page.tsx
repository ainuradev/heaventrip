import Navbar from '@/components/Navbar';
import PackageCard from '@/components/PackageCard'; 
import { umrohPackages } from '@/data/packages';
import Footer from '@/components/Footer';
import { Calendar, ChevronRight, ShieldCheck, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070" 
            alt="Makkah" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              <ShieldCheck size={16} />
              Izin Resmi Kemenag No. 123/2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Ibadah Tenang, <br />
              <span className="text-amber-400">Penuh Makna.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
              Wujudkan impian beribadah ke Tanah Suci dengan layanan terbaik, hotel bintang 5, dan bimbingan manasik sesuai Sunnah.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                Lihat Paket Umroh 2024
                <ChevronRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition">
                Jadwal Keberangkatan
              </button>
            </div>
          </div>
        </div>

        {/* Info Card Floating */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:grid grid-cols-3 gap-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-4xl w-full text-emerald-900">
           <div className="flex items-center gap-4 border-r border-gray-100">
              <Calendar className="text-amber-500" size={32} />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Keberangkatan</p>
                <p className="font-bold italic">Tersedia Tiap Bulan</p>
              </div>
           </div>
           <div className="flex items-center gap-4 border-r border-gray-100 px-4">
              <ShieldCheck className="text-amber-500" size={32} />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Kepastian</p>
                <p className="font-bold italic">Pasti Terbang & Aman</p>
              </div>
           </div>
           <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center font-bold">A</div>
                <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center font-bold text-amber-700">B</div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Hotel</p>
                <p className="font-bold italic">Bintang 5 Dekat Masjid</p>
              </div>
           </div>
        </div>
      </section>
      
  <section id="paket" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Pilihan Terbaik</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-950">Paket Umroh Terpercaya</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {umrohPackages.map((pkg) => (
            <PackageCard key={pkg.id} data={pkg} />
          ))}
        </div>
        
        <div className="mt-16 bg-emerald-900 rounded-3xl p-8 text-center text-white">
          <p className="text-lg mb-4 italic">"Ke Baitullah kini lebih mudah dengan sistem cicilan syariah tanpa riba."</p>
          <button className="text-amber-400 font-bold border-b-2 border-amber-400 hover:text-white hover:border-white transition">
            Pelajari Selengkapnya Hubungi Admin
          </button>
        </div>
      </section>
      {/* Floating WA Button */}
<a 
  href="https://wa.me/62812345678" 
  target="_blank" 
  className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center">
  <Phone fill="white" size={28} />
</a>
<Footer />
    </main>
    
  ); 
}