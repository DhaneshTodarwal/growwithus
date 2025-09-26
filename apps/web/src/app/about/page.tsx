import { siteConfig } from '../../config/site'
import Image from 'next/image'
import FoundersShowcase from '../../components/FoundersShowcase'

export default function About() {
  const founders = [
    {
      name: 'Dhanesh Todarwal',
      role: 'Co‑Founder, Grow‑Withus',
      bio:
        'Dhanesh is a skilled developer and stock market analyst known for building powerful apps and websites. He designs and tests trading strategies, blending tech expertise with sharp market insights for actionable results.',
      image: '/images/founders/dhanesh.jpeg',
      location: 'India',
      links: [],
    },
    {
      name: 'Ishwar Hiran',
      role: 'Co‑Founder, Grow‑Withus',
      bio:
        'Expert in marketing and SEO, Ishwar specializes in boosting brand visibility and driving growth through data‑driven strategies. His deep market research skills help deliver smart solutions for business expansion.',
  image: '/images/founders/ishwar.jpeg',
      location: 'India',
      links: [],
    },
  ]
  const team = [
    {
      name: 'Yogesh Todarwal',
      role: 'Advisor',
  expertise: 'Research, Career Guidance, Stock Market, Business Strategy',
  description: 'Yogesh brings academic excellence and research expertise from IIT Bombay and a PhD in Sweden. He guides in career planning, stock market strategies, and business growth, helping shape vision and deliver success.',
  image: '/images/founders/yogesh.jpeg'
    }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients competitive advantages.",
      icon: "🚀"
    },
    {
      title: "Quality Obsessed",
      description: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail.",
      icon: "⭐"
    },
    {
      title: "Partnership Minded",
      description: "We're not just vendors—we're strategic partners invested in your long-term success and growth.",
      icon: "🤝"
    },
    {
      title: "Transparent Always",
      description: "Clear communication, honest timelines, and upfront pricing. No surprises, no hidden costs.",
      icon: "💎"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto px-4">
          <h1>About {siteConfig.name}</h1>
          <p className="subheading mt-6 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and AI specialists 
            dedicated to crafting digital experiences that transform businesses 
            and delight users.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                {siteConfig.name} was born from a simple observation: too many businesses 
                struggle with outdated digital tools that hold them back instead 
                of propelling them forward.
              </p>
              <p>
                Founded in 2019, we set out to bridge the gap between cutting-edge 
                technology and practical business solutions. Our team combines deep 
                technical expertise with real-world business experience.
              </p>
              <p>
                Today, we're proud to have helped over 150 companies transform their 
                digital presence and leverage AI to streamline operations, enhance 
                customer experiences, and drive growth.
              </p>
            </div>
          </div>
          <div className="card bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
            <h3 className="text-2xl font-semibold mb-4">Mission Statement</h3>
            <p className="text-lg leading-relaxed">
              "To empower businesses with intelligent, scalable digital solutions 
              that turn ambitious visions into measurable results—while making 
              the complex simple and the impossible achievable."
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Founders Showcase (auto-slide with large photos) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <FoundersShowcase />
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="subheading max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{value.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="subheading max-w-2xl mx-auto">
              Talented individuals who are passionate about technology and 
              dedicated to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="card text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Placeholder for team member photo */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <div className="text-sm font-medium mb-2 text-accent-primary">{member.role}</div>
                <div className="text-xs mb-3 opacity-75">{member.expertise}</div>
                <p className="text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-4">Ready to Work Together?</h2>
          <p className="subheading mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and 
            achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              <span>Start a Project</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/case-studies" className="btn btn-secondary">
              <span>View Our Work</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
