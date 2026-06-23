import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
