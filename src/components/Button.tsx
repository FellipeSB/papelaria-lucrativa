import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href = "#oferta", children, className = "" }: ButtonProps) {
  return (
    <a 
      href={href} 
      className={`relative w-full flex items-center justify-center overflow-hidden bg-[#FFD700] hover:bg-[#F59E0B] text-gray-950 font-extrabold text-lg md:text-xl py-5 px-6 rounded-2xl shadow-[0_4px_14px_0_rgba(255,215,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.23)] hover:-translate-y-1 transition-all duration-200 active:scale-95 border-b-4 border-[#B8860B] active:border-b-0 active:mt-1 ${className}`}
    >
      <div className="absolute inset-0 w-full h-full bg-white opacity-20 -skew-x-[30deg] translate-x-[-150%] animate-[shine_3s_infinite]"></div>
      <span className="flex items-center justify-center gap-2 relative z-10 w-full">
        {children} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0" strokeWidth={4} />
      </span>
    </a>
  );
}
