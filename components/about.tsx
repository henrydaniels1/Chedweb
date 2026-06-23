'use client'

import { motion } from 'framer-motion'
import { Users, Target, Rocket } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our success. We align every solution with your business goals.',
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge technology and creative thinking.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work as an extension of your team, not just a vendor.',
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About CHEDWEB</h2>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              Founded in 2012, we&apos;ve partnered with over 150 brands to transform their digital vision into reality. Our team of designers, developers, and strategists bring expertise across industries.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We believe that great digital experiences aren&apos;t just beautiful—they&apos;re strategic. Every project is an opportunity to create lasting impact for our clients and their customers.
            </p>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#C9A84C]/30 transition-colors"
                >
                  <div className="flex gap-4">
                    <Icon className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-foreground/70 text-sm">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
