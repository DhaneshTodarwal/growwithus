'use client'
import { siteConfig } from '../../config/site'
import Image from 'next/image'
import FoundersShowcase from '../../components/FoundersShowcase'
import { useState } from 'react'

export default function About() {
  const [showAdvisorModal, setShowAdvisorModal] = useState(false)
  
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
                {siteConfig.name} was born from a fresh perspective: businesses today 
                need modern, intelligent solutions that drive real results—not 
                outdated tools that create more problems than they solve.
              </p>
              <p>
                We're a dynamic team of innovators who saw a gap in the market 
                for accessible, high-quality digital solutions. By combining the 
                latest technologies with proven business strategies, we help 
                companies leap ahead of their competition.
              </p>
              <p>
                Our mission is simple: deliver cutting-edge websites, AI solutions, 
                and custom software that don't just meet expectations—they exceed 
                them. Every project is an opportunity to showcase what's possible 
                when creativity meets technical excellence.
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

      {/* Achievements & Milestones */}
      <section className="py-20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Track Record</h2>
            <p className="subheading max-w-2xl mx-auto">
              Numbers that speak to our commitment and success in delivering exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-lg font-semibold mb-1">Projects Delivered</div>
              <p className="text-sm opacity-75">Across web, mobile, and AI</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-lg font-semibold mb-1">Client Satisfaction</div>
              <p className="text-sm opacity-75">Rated 5/5 average</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-lg font-semibold mb-1">Active Clients</div>
              <p className="text-sm opacity-75">Growing every month</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-lg font-semibold mb-1">Support Available</div>
              <p className="text-sm opacity-75">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Technology Expertise */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Technology Stack</h2>
            <p className="subheading max-w-2xl mx-auto">
              We work with cutting-edge technologies to build future-proof solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">Vue.js</span>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Backend & Database
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">Redis</span>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">OpenAI</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">Vercel</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Grow-Withus?</h2>
            <p className="subheading max-w-2xl mx-auto">
              What sets us apart from other agencies and makes us the right partner for your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="leading-relaxed">We deliver projects 30% faster than industry average without compromising quality.</p>
            </div>
            
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
              <p className="leading-relaxed">Get enterprise-grade solutions at startup-friendly prices with transparent pricing.</p>
            </div>
            
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">ROI Focused</h3>
              <p className="leading-relaxed">Every feature we build is designed to drive real business results and measurable growth.</p>
            </div>
            
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="leading-relaxed">Industry-standard security practices, GDPR compliance, and data protection built-in.</p>
            </div>
            
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
              <p className="leading-relaxed">Talk directly to founders and developers—no middlemen, no communication gaps.</p>
            </div>
            
            <div className="card group hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="leading-relaxed">Post-launch support, maintenance, and iteration to keep your solution running smoothly.</p>
            </div>
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

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-accent-secondary/5 to-accent-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="subheading max-w-2xl mx-auto">
              Delivering tailored solutions across diverse sectors with deep domain expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm opacity-75">HIPAA-compliant solutions, telemedicine platforms</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🏪</div>
              <h3 className="font-semibold mb-2">E-Commerce</h3>
              <p className="text-sm opacity-75">Online stores, marketplace platforms</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold mb-2">Finance</h3>
              <p className="text-sm opacity-75">FinTech apps, trading platforms, analytics</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm opacity-75">E-learning platforms, LMS solutions</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="font-semibold mb-2">Hospitality</h3>
              <p className="text-sm opacity-75">Booking systems, guest management</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm opacity-75">Inventory systems, IoT solutions</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🏡</div>
              <h3 className="font-semibold mb-2">Real Estate</h3>
              <p className="text-sm opacity-75">Property listings, CRM platforms</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Startups</h3>
              <p className="text-sm opacity-75">MVP development, rapid prototyping</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Advisory Team - Clean Button Approach */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Advisory Team</h2>
            <p className="subheading max-w-2xl mx-auto">
              Expert guidance from industry leaders and academic excellence.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => setShowAdvisorModal(true)}
              className="card group hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer max-w-md"
            >
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-accent-primary/20 group-hover:border-accent-primary/50 transition-colors">
                  <Image
                    src="/images/founders/yogesh.jpeg"
                    alt="Yogesh Todarwal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold mb-1">Yogesh Todarwal</h3>
                  <div className="text-sm font-medium text-accent-primary mb-2">Strategic Advisor</div>
                  <div className="text-xs opacity-75 mb-2">IIT Bombay | PhD Sweden</div>
                  <div className="text-sm text-accent-primary font-medium group-hover:underline">
                    Click to learn more →
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Advisor Modal */}
      {showAdvisorModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAdvisorModal(false)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-accent-primary to-accent-secondary p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Yogesh Todarwal</h3>
                  <p className="text-white/90">Strategic Advisor</p>
                </div>
                <button
                  onClick={() => setShowAdvisorModal(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent-primary/20">
                  <Image
                    src="/images/founders/yogesh.jpeg"
                    alt="Yogesh Todarwal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Education & Background */}
              <div className="space-y-4">
                <div className="card bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">🎓</span>
                    Education
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-primary">•</span>
                      <span>PhD in Research - Sweden</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-primary">•</span>
                      <span>IIT Bombay Graduate</span>
                    </li>
                  </ul>
                </div>

                {/* Expertise */}
                <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-xl">💼</span>
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">
                      Research
                    </span>
                    <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">
                      Career Guidance
                    </span>
                    <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">
                      Stock Market
                    </span>
                    <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">
                      Business Strategy
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="card">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-xl">👨‍💼</span>
                    About
                  </h4>
                  <p className="leading-relaxed">
                    Yogesh brings academic excellence and research expertise from IIT Bombay and a PhD in Sweden. 
                    He guides in career planning, stock market strategies, and business growth, helping shape vision 
                    and deliver success. His deep understanding of both technical and business domains makes him an 
                    invaluable strategic advisor to Grow-Withus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
