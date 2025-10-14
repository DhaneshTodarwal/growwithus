import { siteConfig } from '../config/site'
import Reveal from './Reveal'

export default function Testimonials() {
  const testimonials = [
  { quote: `${siteConfig.name} cut our resolution time by 70%. A game-changer.`, author: "CEO, Mid-Market Retail" },
    { quote: "Our load time is down 60% and conversions are up 35%. Incredible.", author: "Founder, E-commerce Startup" },
    { quote: "The cross-platform app boosted our team’s efficiency by 50%.", author: "COO, SMB Logistics" }
  ]
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container py-16">
        <Reveal delay={0}><h2 className="text-center">Trusted by Innovative Teams</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="border rounded p-6 bg-white dark:bg-black">
                <blockquote className="italic">“{t.quote}”</blockquote>
                <figcaption className="mt-4 font-semibold">— {t.author}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
