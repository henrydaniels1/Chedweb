'use client'

import Link from 'next/link'
import { Mail, Share2 } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    {
      section: 'Services',
      items: ['Web Development', 'UI/UX Design', 'Strategy', 'Mobile Apps'],
    },
    {
      section: 'Company',
      items: ['About', 'Blog', 'Careers', 'Contact'],
    },
    {
      section: 'Legal',
      items: ['Privacy', 'Terms', 'Cookies', 'License'],
    },
  ]

  const socials = [
    { icon: Mail, href: 'mailto:henrydanielchibuzor@gmail.com', label: 'Email' },
    { icon: Share2, href: '#', label: 'Social' },
  ]

  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#C9A84C] to-[#1B3A8C] bg-clip-text text-transparent mb-4 block">
              CHEDWEB
            </Link>
            <p className="text-foreground/70 text-sm">
              Transform your vision into digital excellence. Premium solutions for brands that demand innovation.
            </p>
          </div>

          {/* Links Sections */}
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{section.section}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-foreground/70 text-sm hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            {socials.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground/70 hover:text-foreground hover:border-[#C9A84C]/30 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/70 gap-4">
            <p>&copy; {currentYear} CHEDWEB. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
