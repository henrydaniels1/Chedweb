'use client'

import { motion } from 'framer-motion'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-16 md:pb-24 overflow-hidden relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A8C]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(27,58,140,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(27,58,140,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Gold Line Art — luxury abstract curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <path d="M-100 400 Q200 100 500 350 T1100 200" fill="none" stroke="#C9A84C" strokeWidth="0.6" strokeOpacity="0.25" />
        <path d="M-50 600 Q300 250 650 500 T1300 300" fill="none" stroke="#C9A84C" strokeWidth="0.4" strokeOpacity="0.18" />
        <path d="M800 -50 Q1000 300 750 550 T900 900" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M0 800 Q400 500 700 700 T1400 500" fill="none" stroke="#C9A84C" strokeWidth="0.35" strokeOpacity="0.15" />
        <circle cx="480" cy="180" r="1.5" fill="#C9A84C" fillOpacity="0.4" />
        <circle cx="820" cy="320" r="1" fill="#C9A84C" fillOpacity="0.35" />
        <circle cx="200" cy="600" r="1.2" fill="#C9A84C" fillOpacity="0.3" />
        <circle cx="1100" cy="150" r="1" fill="#C9A84C" fillOpacity="0.3" />
      </svg>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="mt-6 mb-6 inline-block">
          <div className="px-4 py-2 rounded-full bg-white/5 border border-[#C9A84C]/30 backdrop-blur-sm">
            <p className="text-sm text-[#C9A84C] font-medium">Welcome to Digital Excellence</p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-foreground">Transform Your </span>
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#1B3A8C] bg-clip-text text-transparent">Vision Into Reality</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-12">
          We&apos;re a premium digital agency crafting innovative solutions for brands that refuse to settle. Strategy, design, and technology working in perfect harmony.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-[#C9A84C]  text-white font-semibold hover:shadow-lg hover:shadow-[#C9A84C]/30 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-lg border border-[#C9A84C]/50 text-foreground font-semibold hover:bg-white/5 transition-all duration-200"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '12+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#C9A84C]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C9A84C] to-[#1B3A8C] bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
