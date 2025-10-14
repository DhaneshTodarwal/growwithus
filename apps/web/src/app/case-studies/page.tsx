import { siteConfig } from '../../config/site'
export default function CaseStudies() {
  const caseStudies = [
    {
      id: "techstart-ai-platform",
      title: "TechStart AI Platform",
      client: "TechStart Inc.",
      category: "AI Development",
      results: {
        metric1: "300% increase in user engagement",
        metric2: "50% reduction in customer support tickets",
        metric3: "15x faster data processing"
      },
      description: "Built an intelligent customer service platform using natural language processing and machine learning to automate support workflows and enhance user experience.",
      services: ["AI Development", "Full-Stack Development", "DevOps"],
      technologies: ["Python", "TensorFlow", "Next.js", "AWS", "MongoDB"],
      challenge: "TechStart needed to scale their customer support without proportionally increasing headcount, while maintaining high service quality.",
      solution: "We developed an AI-powered platform that intelligently routes tickets, provides automated responses for common queries, and assists human agents with smart suggestions.",
      image: "/case-studies/techstart.jpg",
      testimonial: {
  quote: `${siteConfig.name} transformed our customer support operations. The AI platform they built not only reduced our workload but actually improved customer satisfaction scores.`,
        author: "Jane Smith",
        role: "CTO, TechStart Inc."
      }
    },
    {
      id: "ecommerce-redesign",
      title: "E-Commerce Platform Redesign",
      client: "ShopFlow",
      category: "Web Development",
      results: {
        metric1: "180% increase in conversion rate",
        metric2: "65% reduction in cart abandonment",
        metric3: "90% faster page load times"
      },
      description: "Complete redesign and development of a high-performance e-commerce platform with advanced analytics, personalization, and mobile-first design.",
      services: ["Web Development", "UI/UX Design", "Performance Optimization"],
      technologies: ["Next.js", "TypeScript", "Stripe", "Redis", "PostgreSQL"],
      challenge: "ShopFlow's legacy platform was slow, had poor mobile experience, and lacked modern e-commerce features, resulting in high bounce rates.",
      solution: "We built a modern, fast, and mobile-optimized platform with advanced search, personalized recommendations, and streamlined checkout process.",
      image: "/case-studies/shopflow.jpg",
      testimonial: {
        quote: "The new platform exceeded all our expectations. Sales have nearly doubled since launch, and our customers love the new shopping experience.",
        author: "Mike Johnson",
        role: "Founder, ShopFlow"
      }
    },
    {
      id: "healthtech-app",
      title: "HealthTech Mobile App",
      client: "MediCare Connect",
      category: "Mobile Development",
      results: {
        metric1: "10,000+ active users in first month",
        metric2: "95% user satisfaction rating",
        metric3: "40% improvement in patient adherence"
      },
      description: "Developed a comprehensive healthcare mobile app connecting patients with healthcare providers, featuring telemedicine capabilities and medication tracking.",
      services: ["Mobile Development", "Healthcare Compliance", "API Integration"],
      technologies: ["React Native", "Node.js", "WebRTC", "HIPAA Compliance"],
      challenge: "MediCare needed a HIPAA-compliant mobile solution to improve patient engagement and streamline healthcare delivery.",
      solution: "We created a secure, user-friendly mobile app with video consultations, appointment scheduling, and medication reminders.",
      image: "/case-studies/medicare.jpg",
      testimonial: {
  quote: `${siteConfig.name} delivered a fantastic app that our patients love. The compliance expertise and attention to detail were exceptional.`,
        author: "Dr. Sarah Lee",
        role: "Medical Director, MediCare Connect"
      }
    },
    {
      id: "fintech-dashboard",
      title: "Financial Analytics Dashboard",
      client: "InvestWise",
      category: "Data Visualization",
      results: {
        metric1: "200% increase in user engagement",
        metric2: "60% reduction in analysis time",
        metric3: "99.9% uptime achieved"
      },
      description: "Built a real-time financial analytics dashboard with advanced data visualization, automated reporting, and portfolio management tools.",
      services: ["Data Visualization", "Real-time Analytics", "Financial APIs"],
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      challenge: "InvestWise needed a sophisticated dashboard to help financial advisors make data-driven decisions quickly and efficiently.",
      solution: "We developed an intuitive dashboard with real-time market data, interactive charts, and automated alert systems.",
      image: "/case-studies/investwise.jpg",
      testimonial: {
        quote: "The dashboard has revolutionized how we analyze market data. Our advisors can now make informed decisions faster than ever.",
        author: "Robert Chen",
        role: "CEO, InvestWise"
      }
    }
  ]

  const categories = ["All", "AI Development", "Web Development", "Mobile Development", "Data Visualization"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto px-4">
          <h1>Case Studies</h1>
          <p className="subheading mt-6 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results through innovative technology solutions.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-secondary text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-lg font-semibold opacity-75">
                    {study.title}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-4">
                  {study.category}
                </div>

                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-accent-primary font-medium mb-4">{study.client}</p>
                <p className="leading-relaxed mb-6">{study.description}</p>

                {/* Key Results */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Results:</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {study.results.metric1}
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {study.results.metric2}
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {study.results.metric3}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-background-secondary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-l-4 border-accent-primary pl-4 py-2 bg-accent-primary/5 rounded-r">
                  <p className="italic mb-2">"{study.testimonial.quote}"</p>
                  <div className="text-sm">
                    <span className="font-medium">{study.testimonial.author}</span>
                    <span className="opacity-75"> - {study.testimonial.role}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-6">
                  <button className="btn btn-outline w-full">
                    <span>View Full Case Study</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="mb-4">Ready to Create Your Success Story?</h2>
          <p className="subheading mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              <span>Start Your Project</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/services" className="btn btn-secondary">
              <span>Explore Our Services</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
