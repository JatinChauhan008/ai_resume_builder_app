"use client"
import React, { useState } from "react"

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-violet-600">
          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
          <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      ),
      color: "violet",
      title: "Real-Time Analytics",
      desc: "Get instant insights into your finances with live dashboards.",
      activeBg: "bg-violet-100",
      activeBorder: "border-violet-300",
      hoverBg: "hover:bg-violet-100",
      hoverBorder: "hover:border-violet-300",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-green-600">
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
      ),
      color: "green",
      title: "Bank-Grade Security",
      desc: "End-to-end encryption, 2FA, compliance with GDPR standards.",
      activeBg: "bg-green-100",
      activeBorder: "border-green-300",
      hoverBg: "hover:bg-green-100",
      hoverBorder: "hover:border-green-300",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-orange-500">
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
      ),
      color: "orange",
      title: "Customizable Reports",
      desc: "Export professional, audit-ready financial reports for tax or internal review.",
      activeBg: "bg-orange-100",
      activeBorder: "border-orange-300",
      hoverBg: "hover:bg-orange-100",
      hoverBorder: "hover:border-orange-300",
    },
  ]

  return (
    <section id="features" style={{ fontFamily: "'Poppins', sans-serif" }} className="w-full bg-white py-20 px-6">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="flex items-center gap-2 text-sm text-green-700 bg-green-100 border border-green-200 rounded-full px-4 py-1">
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
              stroke="#15803d" strokeMiterlimit="5.759" strokeLinecap="round"
            />
          </svg>
          <span>Simple Process</span>
        </div>
        <h2 className="text-4xl font-bold text-slate-900">Build your resume</h2>
        <p className="text-slate-500 text-base max-w-xl leading-relaxed">
          Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">

        {/* Image collage */}
        <div className="relative w-80 h-[420px] flex-shrink-0">
          {/* Glow blob */}
          <div className="absolute inset-0 rounded-3xl bg-violet-100/60 blur-2xl scale-90 -z-10" />

          {/* Top card */}
          <div className="absolute top-0 left-6 w-52 h-56 rounded-2xl overflow-hidden shadow-xl border border-white">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Person 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom card */}
          <div className="absolute bottom-0 right-0 w-56 h-64 rounded-2xl overflow-hidden shadow-xl border border-white">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
              alt="Person 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-2 w-full max-w-md">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-200
                ${activeIndex === i
                  ? `${feature.activeBg} ${feature.activeBorder} border`
                  : `border-transparent bg-transparent ${feature.hoverBg} ${feature.hoverBorder} hover:border`
                }`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="mt-0.5 flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-base font-semibold text-slate-800 mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}