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
