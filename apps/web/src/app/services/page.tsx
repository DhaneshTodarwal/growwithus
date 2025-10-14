import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/Reveal'
import { Globe, Smartphone, Code, LineChart, Palette, BarChart3, ShoppingCart, MessageCircle, Share2 } from 'lucide-react'

export default function Services() {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto p-8">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text mb-4">Services</h1>
        <p className="text-text-secondary text-lg">From strategy to launch, we deliver the full stack: web, apps, AI, and growth.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
        <Reveal delay={0}>
          <ServiceCard
            href="/services/website-development"
            icon={<Globe size={32} />}
            title="Website Development"
            description="Build fast, SEO‑optimized websites that convert with modern frameworks and best practices."
            gradient="bg-gradient-to-br from-blue-500 to-cyan-400"
            badge="Most Popular"
          />
        </Reveal>

        <Reveal delay={80}>
          <ServiceCard
            href="/services/application-development"
            icon={<Smartphone size={32} />}
            title="Application Development"
            description="Cross‑platform mobile and desktop apps that work seamlessly across devices."
            gradient="bg-gradient-to-br from-purple-500 to-pink-400"
            badge="Cross-Platform"
          />
        </Reveal>

        <Reveal delay={160}>
          <ServiceCard
            href="/services/custom-ai-agents"
            icon={<Code size={32} />}
            title="Custom AI Agents"
            description="Chatbots, automation, and AI‑powered tools that enhance your operations."
            gradient="bg-gradient-to-br from-emerald-500 to-teal-400"
            badge="AI Powered"
          />
        </Reveal>

        <Reveal delay={240}>
          <ServiceCard
            href="/services/seo-optimization"
            icon={<LineChart size={32} />}
            title="SEO Optimization"
            description="Technical SEO, Core Web Vitals, on‑page best practices, and content strategy to rank and convert."
            gradient="bg-gradient-to-br from-amber-500 to-orange-400"
            badge="Growth"
          />
        </Reveal>

        <Reveal delay={320}>
          <ServiceCard
            href="/services/brand-identity"
            icon={<Palette size={32} />}
            title="Brand Identity & Logo"
            description="Logo systems, typography, color palettes, and brand guidelines for a consistent presence."
            gradient="bg-gradient-to-br from-rose-500 to-fuchsia-400"
            badge="Design"
          />
        </Reveal>

        <Reveal delay={400}>
          <ServiceCard
            href="/services/sem-ads"
            icon={<BarChart3 size={32} />}
            title="SEM & Performance Ads"
            description="Google Ads, Meta Ads, and analytics setup to drive qualified traffic and measurable ROI."
            gradient="bg-gradient-to-br from-sky-500 to-indigo-400"
            badge="Paid Growth"
          />
        </Reveal>

        <Reveal delay={480}>
          <ServiceCard
            href="/services/ecommerce-development"
            icon={<ShoppingCart size={32} />}
            title="E-Commerce Development"
            description="Build powerful online stores with payment gateways, inventory management, and conversion optimization."
            gradient="bg-gradient-to-br from-green-500 to-emerald-400"
            badge="High Revenue"
          />
        </Reveal>

        <Reveal delay={560}>
          <ServiceCard
            href="/services/whatsapp-business"
            icon={<MessageCircle size={32} />}
            title="WhatsApp Business API"
            description="Automate customer service, order tracking, and broadcasts with WhatsApp chatbots and API integration."
            gradient="bg-gradient-to-br from-teal-500 to-cyan-400"
            badge="Trending"
          />
        </Reveal>

        <Reveal delay={640}>
          <ServiceCard
            href="/services/social-media-management"
            icon={<Share2 size={32} />}
            title="Social Media Management"
            description="Content creation, scheduling, engagement, and analytics for Instagram, Facebook, and LinkedIn."
            gradient="bg-gradient-to-br from-pink-500 to-rose-400"
            badge="Growth"
          />
        </Reveal>
      </div>
    </section>
  )
}
