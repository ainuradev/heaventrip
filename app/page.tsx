"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PackageCard from '@/components/PackageCard'; 
import { umrohPackages } from '@/data/packages';
import Footer from '@/components/Footer';
import FaqItem from '@/components/FaqItem';
import { motion } from 'framer-motion';
import { Award, Users, BookOpenCheck, CheckCircle, Calendar, ChevronRight, ShieldCheck, Phone, ClipboardCheck, PlaneTakeoff, Building2, MapPinCheck, Star } from 'lucide-react';

export default function Home() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/62812345678?`, '_blank');
};
  const steps = [
  {
    title: "Pendaftaran & Berkas",
    desc: "Pilih paket, bayar uang muka (DP), dan serahkan dokumen paspor & berkas lainnya.",
    icon: <ClipboardCheck size={24} />,
  },
  {
    title: "Bimbingan Manasik",
    desc: "Pelatihan tata cara ibadah sesuai Sunnah agar Anda siap secara batin dan ilmu.",
    icon: <Award size={24} />,
  },
  {
    title: "Keberangkatan",
    desc: "Pelepasan jamaah di Bandara Soekarno-Hatta menuju Tanah Suci dengan asisten handling.",
    icon: <PlaneTakeoff size={24} />,
  },
  {
    title: "Ibadah di Tanah Suci",
    desc: "Menunaikan Umroh/Haji, Ziarah Makkah & Madinah dengan hotel bintang 5.",
    icon: <Building2 size={24} />,
  },
  {
    title: "Kembali ke Tanah Air",
    desc: "Kepulangan ke Indonesia dengan membawa kenangan manis dan air zam-zam 5L.",
    icon: <MapPinCheck size={24} />,
  },
];
  const faqs = [
  { q: "Apa saja syarat pendaftaran Umroh?", a: "Syarat utama adalah Paspor yang masih berlaku minimal 7 bulan, fotokopi KTP/KK, foto background putih, dan sertifikat vaksin (sesuai aturan terbaru)." },
  { q: "Bagaimana jika visa tidak disetujui?", a: "Kami menjamin pengurusan visa secara maksimal. Jika terjadi kendala dari pihak kedutaan, kami akan membantu penjadwalan ulang atau opsi sesuai kebijakan yang berlaku." },
  { q: "Apakah bisa mencicil biaya keberangkatan?", a: "Tentu! Kami menyediakan program tabungan umroh dan cicilan syariah tanpa riba bekerja sama dengan mitra perbankan terpercaya." }
];

  const counterItems = [
    { label: "Jamaah Diberangkatkan", value: 12000, suffix: "+" },
    { label: "Paket Aktif", value: 48, suffix: "+" },
    { label: "Tahun Pengalaman", value: 10, suffix: "+" },
    { label: "Kepuasan Jamaah", value: 99, suffix: "%" },
  ];

  const partnerLogos = [
    { name: "Garuda Indonesia", logo: "https://icon2.cleanpng.com/20180816/uss/def9bf5690b840edef235dc79306d0ec.webp" },
    { name: "Saudia", logo: "https://banner2.cleanpng.com/20180614/jlt/aa7rpi5t3.webp" },
    { name: "Emirates", logo: "https://banner2.cleanpng.com/20181117/ivx/kisspng-emirates-bank-account-norway-finance-apk-product-the-emirates-app-1-1-download-apk-cl-5bf0013aec96f9.6362927415424556109691.jpg" },
    { name: "Qatar Airways", logo: "https://banner2.cleanpng.com/lnd/20241121/as/44c5accef05ac2de69d92dcccd2368.webp" },
    { name: "Turkish Airlines", logo: "https://banner2.cleanpng.com/lnd/20241224/pc/a23cc171383f478833c0fc2b2ec25c.webp" },
    { name: "Hilton", logo: "https://banner2.cleanpng.com/20180627/hax/kisspng-hilton-hotels-resorts-hyatt-hilton-worldwide-inn-5b33728ef11971.7618243915300983189876.jpg" },
    { name: "Marriott", logo: "https://banner2.cleanpng.com/20180614/evf/kisspng-marriott-international-marriott-hotels-resorts-l-hotel-chanma-international-5b22292fcb8ee3.7449255415289654238338.jpg" },
    { name: "Accor", logo: "https://banner2.cleanpng.com/20190306/wfw/kisspng-logo-brand-graphic-design-clip-art-text-jt-indigenous-employment-johnathan-thurston-academ-1713902777358.webp" },
    { name: "Hyatt", logo: "https://banner2.cleanpng.com/20180823/tqk/kisspng-hyatt-logo-hotel-resort-beach-hyatt-general-construction-blueberry-builders-1713950771296.webp" },
    { name: "IHG", logo: "https://banner2.cleanpng.com/20190225/eze/kisspng-intercontinental-hotels-group-logo-gif-image-5c747ef8d70810.7076647515511385528808.jpg" },
  ];

  const testimonials = [
    {
      name: "Ahmad Fauzi",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Pelayanannya rapi dari awal sampai pulang. Alhamdulillah ibadah terasa jauh lebih tenang.",
      rotateClass: "rotate-1",
    },
    {
      name: "Siti Rahma",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Timnya responsif dan sabar membimbing. Hotel dekat masjid, jadi ibadah lebih nyaman.",
      rotateClass: "-rotate-1",
    },
    {
      name: "Muhammad Rafi",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      quote: "Jadwal jelas, visa aman, dan pendamping sangat membantu selama di Tanah Suci.",
      rotateClass: "rotate-1",
    },
    {
      name: "Nabila Putri",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Manasik sebelum berangkat sangat membantu. Semua proses terasa profesional.",
      rotateClass: "-rotate-1",
    },
    {
      name: "Ridwan Hakim",
      photo: "https://randomuser.me/api/portraits/men/51.jpg",
      quote: "Transportasi dan akomodasi sesuai janji. Programnya cocok untuk keluarga.",
      rotateClass: "rotate-1",
    },
    {
      name: "Aisyah Fitri",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
      quote: "Bimbingan ibadahnya detail dan menenangkan. InsyaAllah ingin berangkat lagi bersama HeavenTrip.",
      rotateClass: "-rotate-1",
    },
  ];

  const [counts, setCounts] = useState<number[]>(() => counterItems.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    let frameId = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(counterItems.map((item) => Math.floor(item.value * progress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-emerald-950">
  {/* Background Image harus absolute fill */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent z-10" />
    <img 
      src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070" 
      alt="Makkah" 
      className="w-full h-full object-cover"
    />
  </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
  <div className="flex flex-col items-start text-left max-w-2xl"> {/* 'items-start' buat rata kiri */}
    
    {/* Badge Izin */}
    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-4 py-1 rounded-full text-sm font-semibold mb-6">
      <ShieldCheck size={16} />
      Izin Resmi Kemenag No. 123/2024
    </div>
    
    {/* Headline */}
    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
      Ibadah Tenang, <br />
      <span className="text-amber-400">Penuh Makna.</span>
    </h1>
    
    {/* Deskripsi */}
    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
      Wujudkan impian beribadah ke Tanah Suci dengan layanan terbaik, hotel bintang 5, dan bimbingan manasik sesuai Sunnah.
    </p>

    {/* CTA Buttons di Samping */}
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105">
        Lihat Paket Umroh 2024
        <ChevronRight size={20} />
      </button>
      <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-white transition">
        Jadwal Keberangkatan
      </button>
    </div>

  </div>
</div>
</section>

      <section id="tentang" className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Bagian Kiri: Gambar & Badge */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="./images/about.webp" 
            alt="Manasik Umroh" 
            className="w-full h-[500px] object-cover"
          />
        </div>
        {/* Dekorasi Aksen Gold */}
        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-full -z-0 opacity-50" />
        <div className="absolute -top-6 -left-6 bg-emerald-900 text-white p-8 rounded-2xl z-20 shadow-xl hidden md:block">
          <p className="text-4xl font-black text-amber-400">10+</p>
          <p className="text-sm font-medium uppercase tracking-wider">Tahun Melayani <br/> Jamaah Indonesia</p>
        </div>
      </div>

      {/* Bagian Kanan: Teks Konten */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 text-center lg:text-left">
          Khidmat Kami
        </h2>
        <h3 className="text-4xl font-extrabold text-emerald-950 mb-6 text-center lg:text-left leading-tight">
          Berpengalaman Menjaga Kenyamanan Ibadah Anda
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-center lg:text-left">
          HeavenTrip lahir dari niat tulus untuk membantu umat muslim menunaikan ibadah ke Tanah Suci tanpa rasa khawatir. Kami memastikan setiap detail perjalanan Anda terencana dengan sempurna, mulai dari manasik hingga kembali ke tanah air.
        </p>

        {/* Fitur Utama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950">Izin Resmi</h4>
              <p className="text-sm text-gray-500">Terdaftar resmi di Kemenag RI sebagai PPIU.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
              <BookOpenCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950">Sesuai Sunnah</h4>
              <p className="text-sm text-gray-500">Bimbingan ibadah dibimbing oleh asatidz berpengalaman.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
              <Users size={24} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950">Pelayanan 24/7</h4>
              <p className="text-sm text-gray-500">Tim handling standby selama di Makkah & Madinah.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
              <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950">Pasti Terbang</h4>
              <p className="text-sm text-gray-500">Tiket dan Visa diproses jauh sebelum keberangkatan.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="relative mt-6 md:-mt-10 z-30 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {counterItems.map((item, index) => (
                <div key={item.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-4xl font-extrabold text-emerald-900 tabular-nums">
                    {counts[index].toLocaleString('id-ID')}
                    <span className="text-amber-500">{item.suffix}</span>
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
            </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden py-4">
            <div className="flex w-max items-center gap-10 partner-marquee">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <img
                  key={`${partner.name}-${index}`}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto shrink-0 object-contain opacity-90 hover:opacity-100 transition"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

{/* Section Timeline */}
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Proses Mudah</h2>
      <h3 className="text-4xl font-extrabold text-emerald-950">5 Langkah Menuju Baitullah</h3>
    </div>

    <div className="relative">
      {/* Garis Tengah (Hanya muncul di Desktop) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-200" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Konten */}
            <div className="md:w-1/2 w-full px-8">
              <div className={`p-6 bg-white rounded-2xl shadow-md border-b-4 border-amber-500 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                <div className={`inline-flex p-3 rounded-xl bg-emerald-100 text-emerald-700 mb-4`}>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
            {/* Titik Tengah */}
            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-emerald-700 rounded-full border-4 border-white text-white font-bold my-4 md:my-0">
              {index + 1}
            </div>
            <div className="md:w-1/2 w-full" />
          </div>
        ))}
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
          <button onClick={handleWhatsApp} className="text-amber-400 font-bold border-b-2 border-amber-400 hover:text-white hover:border-white transition">
            Pelajari Selengkapnya Hubungi Admin
          </button>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Testimoni</h2>
            <h3 className="text-4xl font-extrabold text-emerald-950">Kesan Jamaah HeavenTrip</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`bg-white rounded-2xl border border-emerald-100 p-6 shadow-md ${item.rotateClass}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={item.photo} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-emerald-950">{item.name}</p>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{item.quote}"</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
  <div className="max-w-3xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Tanya Jawab</h2>
      <h3 className="text-4xl font-extrabold text-emerald-950">Pertanyaan Sering Diajukan</h3>
    </div>
    
    <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-emerald-900/5 border border-emerald-50">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.q} answer={faq.a} />
      ))}
    </div>
  </div>
</section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070"
              alt="Masjid"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-950/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-black/60" />

            <div className="relative z-10 px-6 py-14 md:px-12 md:py-20 text-center text-white">
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
                Panggilan Baitullah Sudah Dekat. Amankan Seat Anda Sekarang.
              </h3>

              <div className="mt-8">
                <button
                  onClick={handleWhatsApp}
                  className="cta-pulse inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl transition"
                >
                  <Phone size={24} />
                  Chat WhatsApp Sekarang
                </button>
                <p className="mt-4 text-sm md:text-base text-emerald-100">
                  Konsultasi Gratis & Bimbingan Manasik Sesuai Sunnah
                </p>
              </div>
            </div>
          </div>
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
      <style jsx>{`
        .partner-marquee {
          animation: partnerMarquee 24s linear infinite;
        }

        .cta-pulse {
          animation: ctaPulse 2.6s ease-in-out infinite;
        }

        @keyframes partnerMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes ctaPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(22, 163, 74, 0.35);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 18px 42px rgba(22, 163, 74, 0.5);
          }
        }
      `}</style>
    </main>
    
  ); 
}






