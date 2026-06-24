'use client'

import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    {
      section: 'Services',
      items: [
        { label: 'Web Development', href: '#services' },
        { label: 'UI/UX Design', href: '#services' },
        { label: 'Strategy', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
      ],
    },
    {
      section: 'Company',
      items: [
        // { label: 'About', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    // {
    //   section: 'Legal',
    //   items: [
    //     { label: 'Privacy', href: '#' },
    //     { label: 'Terms', href: '#' },
    //     { label: 'Cookies', href: '#' },
    //     { label: 'License', href: '#' },
    //   ],
    // },
  ]

  const socials = [
    { icon: Mail, href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`, label: 'Email' },
    { icon: MessageCircle, href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, label: 'WhatsApp' },
    { icon: FaXTwitter, href: process.env.NEXT_PUBLIC_X_URL!, label: 'X' },
    { icon: FaInstagram, href: process.env.NEXT_PUBLIC_INSTAGRAM_URL!, label: 'Instagram' },
    { icon: FaLinkedinIn, href: process.env.NEXT_PUBLIC_LINKEDIN_URL!, label: 'LinkedIn' },
  ]

  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-[#C9A84C] mb-4 block">
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
                      href={item.href}
                      className="text-foreground/70 text-sm hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8 ">
          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            {socials.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
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
            {/* <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
