"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-emerald-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-amber-600' : 'text-emerald-950'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-full ${isOpen ? 'bg-amber-100 text-amber-600' : 'bg-emerald-50 text-emerald-900'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}