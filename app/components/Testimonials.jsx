'use client';

import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const testimonials = [
    {
      text: "PrebuiltUI helped us move faster without sacrificing design quality.",
      name: "Cristofer Levin",
      role: "Frontend engineer",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      text: "The attention to detail is impressive. Saved me hours of work.",
      name: "Rohan Mehta",
      role: "Startup founder",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      text: "We were able to ship faster. UI feels polished.",
      name: "Jason Kim",
      role: "Product designer",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    },
    {
      text: "Components are clean and easy to use.",
      name: "Alex Turner",
      role: "Full stack developer",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
    },
    {
      text: "Maintains design consistency across projects.",
      name: "Sofia Martinez",
      role: "UX designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
    {
      text: "Team productivity improved a lot.",
      name: "Daniel Wong",
      role: "UI designer",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];

  const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" },
  ];

  return (
    <section className="py-20 px-4 bg-white" suppressHydrationWarning>

      <div className="max-w-6xl mx-auto">

        {/* OLD HEADER (your preferred one) */}
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-100 border border-green-200 rounded-full px-4 py-1">
            <span>Testimonials</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-900">
            Don't just take our words
          </h2>

          <p className="text-slate-500 max-w-xl">
            Hear what our users say about us. We're always looking for ways to improve.
          </p>
        </div>

        {/* SCROLLING ROWS */}
        <div className="space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="relative overflow-hidden">

              {/* gradient fade */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

              <div className={`flex gap-6 ${row.className}`}>
                {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)].map((t, idx) => (
                  <Card key={idx} {...t} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse 20s linear infinite;
        }
      `}</style>

    </section>
  );
}

/* CARD */
function Card({ text, name, role, image }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 w-[300px] shrink-0 hover:shadow-md transition">

      {/* stars */}
      <div className="flex mb-3">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-gray-400">★</span>
        ))}
      </div>

      <p className="text-sm text-gray-700 mb-4">{text}</p>

      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>

    </div>
  );
}