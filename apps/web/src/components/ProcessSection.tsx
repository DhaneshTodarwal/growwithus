import { BrainCircuit, LayoutTemplate, BotMessageSquare, BarChart4 } from 'lucide-react';
import Reveal from './Reveal';

// New "premium" content for the steps
const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We begin with in-depth research, aligning your vision with market insights and technical possibilities to craft a clear project roadmap.',
    icon: BrainCircuit,
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our creative team transforms ideas into elegant wireframes and stunning mockups, ensuring every detail enhances user experience.',
    icon: LayoutTemplate,
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'We bring your vision to life with cutting-edge technology, backed by rigorous testing and performance optimization.',
    icon: BotMessageSquare,
  },
  {
    number: '04',
    title: 'Launch & Growth Support',
    description: 'Your success doesn’t stop at launch—we provide ongoing support, monitoring, and scalable growth strategies for long-term impact.',
    icon: BarChart4,
  },
];

// Reusable Step Card Component
const StepCard = ({ number, title, description, icon: Icon, isLast }: { number: string, title: string, description: string, icon: React.ElementType, isLast: boolean }) => (
  <div className="relative flex-1 group" tabIndex={0}>
    {/* Card */}
  <div className="relative z-10 overflow-hidden bg-glassmorphism-bg backdrop-blur-md border border-border rounded-2xl p-6 h-full flex flex-col items-start transition-all duration-300 motion-safe:transition-transform group-hover:-translate-y-2 shadow-lg hover:shadow-xl group-hover:shadow-2xl group-hover:shadow-accent-secondary/20 focus-within:ring-2 focus-within:ring-accent-primary/40">
      {/* Ambient brand tint */}
  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 transition-colors duration-300 group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10" />
  {/* Outer glow ring on hover */}
  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-accent-primary/20 transition duration-300" />
      {/* Subtle shine sweep */}
      <div aria-hidden className="pointer-events-none absolute -inset-y-6 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 motion-safe:transition-all motion-safe:duration-700 group-hover:opacity-100 group-hover:translate-x-[260%]" />
      {/* Number badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white text-lg font-bold flex items-center justify-center shadow-lg">
        {number}
      </div>
      {/* Icon */}
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 group-hover:from-accent-primary/25 group-hover:to-accent-secondary/25 text-accent-primary transition-transform duration-300 motion-safe:transition-transform group-hover:scale-110">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-sm">{description}</p>
    </div>
    {/* Horizontal Connector for Desktop */}
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2">
        <div className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    )}
    {/* Vertical Connector for Mobile/Tablet */}
    {!isLast && (
        <div className="block lg:hidden absolute top-full left-1/2 w-0.5 h-16 bg-border -translate-x-1/2" />
    )}
  </div>
);

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-accent-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mb-4">
              Our Proven Process
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="subheading max-w-3xl mx-auto">
              From concept to launch, our structured approach keeps delivery on time, on budget, and above expectations.
            </p>
          </Reveal>
        </div>

        {/* Timeline Container */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-y-10 lg:gap-x-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100} className="flex-1">
              <StepCard
                {...step}
                isLast={index === steps.length - 1}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <Reveal delay={400}>
            <a href="/contact" className="btn btn-primary text-lg py-3 px-8">
              Start Your Project
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
