'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap, TrendingUp, Shield, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom, high-performance websites and applications built with cutting-edge technology.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
  },
  {
    icon: TrendingUp,
    title: 'Strategy & Consulting',
    description: 'Data-driven strategies to elevate your brand and achieve your business goals.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites and applications that outperform the competition.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-level security and compliance for peace of mind.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps that users love.',
  },
]

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-white/[0.02]">
      {/* Network grid — deep space tech aesthetic */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        {/* Grid lines */}
        {[0,1,2,3,4,5].map(i => (
          <line key={`h${i}`} x1="0" y1={`${i * 20}%`} x2="100%" y2={`${i * 20}%`} stroke="#1B3A8C" strokeWidth="0.5" strokeOpacity="0.18" />
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`} x1={`${i * 14.5}%`} y1="0" x2={`${i * 14.5}%`} y2="100%" stroke="#1B3A8C" strokeWidth="0.5" strokeOpacity="0.18" />
        ))}
        {/* Connection lines */}
        <line x1="14.5%" y1="20%" x2="29%" y2="40%" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="29%" y1="40%" x2="58%" y2="20%" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="58%" y1="20%" x2="72.5%" y2="60%" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="72.5%" y1="60%" x2="87%" y2="40%" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="14.5%" y1="80%" x2="43.5%" y2="60%" stroke="#1B3A8C" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="43.5%" y1="60%" x2="58%" y2="80%" stroke="#1B3A8C" strokeWidth="0.5" strokeOpacity="0.25" />
        {/* Node dots */}
        {[
          [14.5,20],[29,40],[58,20],[72.5,60],[87,40],[14.5,80],[43.5,60],[58,80],[0,60],[100,20]
        ].map(([cx,cy],i) => (
          <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#C9A84C" fillOpacity="0.3" />
        ))}
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your digital presence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#C9A84C]/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-[#C9A84C]/20 to-[#1B3A8C]/20 w-fit group-hover:from-[#C9A84C]/30 group-hover:to-[#1B3A8C]/30 transition-colors">
                  <Icon className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
