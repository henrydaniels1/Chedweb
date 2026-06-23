'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Smartphone, LayoutDashboard } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A high-performance e-commerce platform with advanced filtering and real-time inventory.',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    icon: ShoppingCart,
    iconColor: 'text-purple-400',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure, intuitive banking application with AI-powered financial insights.',
    image: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    icon: Smartphone,
    iconColor: 'text-cyan-400',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Complex analytics dashboard with real-time data visualization.',
    image: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    icon: LayoutDashboard,
    iconColor: 'text-emerald-400',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcase of recent projects that showcase our expertise and innovation
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className={`relative h-80 rounded-lg ${project.image} border border-white/10 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <project.icon className={`w-16 h-16 ${project.iconColor} mx-auto mb-3 opacity-60`} />
                    <p className="text-foreground/50 text-sm font-medium">{project.category}</p>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <p className="text-[#C9A84C] text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 text-lg mb-6 leading-relaxed">{project.description}</p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#C9A84C]/50 text-[#C9A84C] font-semibold hover:bg-white/5 transition-all duration-200 group-hover:gap-3 w-fit"
                >
                  View Case Study
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
