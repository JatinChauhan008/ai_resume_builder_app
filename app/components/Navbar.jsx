"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50 mb-100" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6 text-white">
        
        {/* Logo */}
        <h1 className="text-base font-bold tracking-[0.2em] uppercase text-red">
          AI Resume Builder
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 text-xs tracking-[0.15em] font-medium text-white/80">
          <Link href="#" className="hover:text-white transition-colors duration-200">HOME</Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">FEATURES</Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">Testimonials</Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">Contact</Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-5">
          <button className="text-sm text-white/80 hover:text-white transition-colors duration-200 font-medium">
            Log in
          </button>
          <button className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/90 transition-all duration-200 flex items-center gap-1.5">
            Sign up
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}