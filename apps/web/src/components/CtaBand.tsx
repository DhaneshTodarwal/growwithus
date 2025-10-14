import Reveal from './Reveal'

export default function CtaBand() {
  return (
    <section className="bg-gradient-to-r from-forge-blue to-forge-teal text-white">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <Reveal delay={0}>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to ship faster with AI‑powered delivery?</h2>
            <p className="text-sm/6 opacity-90">Get a free 30‑minute audit and a tailored roadmap.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <a href="/pricing" className="px-6 py-3 rounded-md bg-forge-gold text-black font-semibold">Get a Quote</a>
        </Reveal>
      </div>
    </section>
  )
}
