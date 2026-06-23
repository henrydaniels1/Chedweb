'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVentures',
    content: 'CHEDWEB transformed our entire digital presence. The team&apos;s strategic approach and execution excellence exceeded our expectations.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder, Digital Hub',
    content: 'Working with CHEDWEB was a game-changer. They delivered a stunning website that converted 40% more visitors than expected.',
    rating: 5,
    initials: 'MJ',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Director, Global Brands',
    content: 'Their attention to detail and commitment to our success is unmatched. Highly recommend for any serious digital project.',
    rating: 5,
    initials: 'ER',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            See what our clients have to say about their experience working with CHEDWEB
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#C9A84C]/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C]/30 to-[#1B3A8C]/30 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A84C] text-sm font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-foreground/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
