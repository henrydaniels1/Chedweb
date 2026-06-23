'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$2,999',
    description: 'Perfect for small projects and startups',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Basic SEO optimization',
      '2 rounds of revisions',
      'Deployment included',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$8,999',
    description: 'Ideal for growing businesses',
    features: [
      'Unlimited pages',
      'Advanced animations',
      'Full SEO strategy',
      'Unlimited revisions',
      'Performance optimization',
      'Priority support',
      'Analytics integration',
      '3 months support included',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects',
    features: [
      'Everything in Professional',
      'Custom development',
      'Advanced integrations',
      'Dedicated account manager',
      'Training & documentation',
      'Post-launch support',
      'Marketing consultation',
      '12 months support included',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Flexible packages designed to fit every budget. Need something custom? We&apos;ll create it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-lg border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#C9A84C]/10 border-[#C9A84C]/50 shadow-lg shadow-[#C9A84C]/10 lg:scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-[#C9A84C] text-white text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/70 text-sm mb-4">{plan.description}</p>
              <p className="text-4xl font-bold mb-6">
                <span className="text-foreground">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-lg text-foreground/60">/project</span>}
              </p>

              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-6 py-3 rounded-lg font-semibold mb-8 transition-all duration-200 text-center block ${
                  plan.highlighted
                    ? 'bg-[#C9A84C] text-white hover:shadow-lg hover:shadow-[#C9A84C]/30'
                    : 'border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </a>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-3">
                    <Check size={18} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
