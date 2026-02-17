"use client";

import { Star, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface PackageProps {
  data: any;
}

export default function PackageCard({ data }: PackageProps) {
    const handleWhatsApp = () => {
  const message = `Assalamualaikum, Admin. Saya ingin tanya detail Paket: *${data.title}* yang harga *Rp ${data.price}*. Mohon infonya ya!`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/62812345678?text=${encodedMessage}`, '_blank');
};
  return (
    <div className={`relative bg-white rounded-3xl overflow-hidden border ${data.isPopular ? 'border-amber-400 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-lg'}`}>
      {data.isPopular && (
        <div className="absolute top-4 right-4 bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
          Paling Laris
        </div>
      )}
      
      <div className="h-56 overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-amber-600 mb-2">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-semibold italic">{data.hotel}</span>
        </div>
        
        <h3 className="text-xl font-bold text-emerald-950 mb-4">{data.title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <Clock size={18} className="text-emerald-700" />
            <span>Durasi: {data.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <Calendar size={18} className="text-emerald-700" />
            <span>Berangkat: {data.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <CheckCircle2 size={18} className="text-emerald-700" />
            <span>Visa & Manasik Termasuk</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Mulai Dari</p>
            <p className="text-xl font-black text-emerald-800">Rp {data.price}</p>
          </div>
          <button onClick={handleWhatsApp}
    className="bg-emerald-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-emerald-700 transition">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}