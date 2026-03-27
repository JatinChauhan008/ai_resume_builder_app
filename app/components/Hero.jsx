import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">

      {/* Background Image */}
      <Image
        src="/HeroBackground.jpg"
        alt="hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay — matches the dark-top, lighter-bottom cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/70 via-[#0b1220]/30 to-[#0b1220]/10" />

      */

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 -mt-4">

        <div className="flex items-center gap-3 ">
          {/* Avatar cluster */}
          <div className="flex items-center">
            <div className="flex -space-x-2.5">
              {["/user1.jpg", "/user2.jpg", "/user3.jpg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user ${i + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  style={{ zIndex: 3 - i }}
                />
              ))}
              {/* Arrow icon circle — matches the design's circular ↗ icon */}
              <div
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center border-2 border-white"
                style={{ zIndex: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </div>

          <span className="text-sm text-white/90 font-medium tracking-wide">
            Over 1k happy users
          </span>
        </div> 

        {/* Heading */}
        <h1 className="text-3xl md:text-7xl font-bold max-w-3xl leading-[1.08] tracking-tight">
          Land your Dream Job with AI Powered Resumes
          <br />
        </h1>

        {/* Subtext */}
        <p className="mt-5 max-w-xl text-white/75 text-sm md:text-base leading-relaxed font-normal">
          Create, edit, and download professional resumes
          <br className="hidden md:block" />
          with AI-powered assistance.
        </p>

        {/* CTA */}
        <div className="flex justify-center items-center gap-4 mt-8">
        <button className="mt-8 bg-white text-black px-7 py-3.5 rounded-2xl text-sm font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 shadow-lg">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
        <button className="mt-8 bg-white text-black px-7 py-3.5 rounded-2xl text-sm font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 shadow-lg">
          Try Demo
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
        </div>
      </div>
    </section>
  );
}