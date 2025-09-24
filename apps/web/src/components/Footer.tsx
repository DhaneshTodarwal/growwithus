import { siteConfig } from '../config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services#web" },
      { name: "App Development", href: "/services#app" },
      { name: "AI Solutions", href: "/services#ai" },
      { name: "UI/UX Design", href: "/services#design" },
      { name: "DevOps & Cloud", href: "/services#devops" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Our Process", href: "/process" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "AI Demos", href: "/ai-demos" },
      { name: "Support", href: "/support" },
      { name: "FAQ", href: "/faq" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" }
    ]
  }

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Twitter", href: "https://x.com/TodarwalDhanesh", icon: "twitter" },
    { name: "GitHub", href: "#", icon: "github" },
    { name: "Dribbble", href: "#", icon: "dribbble" }
  ]

  return (
    <footer className="bg-background-secondary border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">{siteConfig.name.charAt(0).toUpperCase()}</span>
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="leading-relaxed mb-6 max-w-md">
              We craft digital experiences that transform businesses and delight users. 
              From cutting-edge web applications to intelligent AI solutions, we bring 
              your vision to life with precision and innovation.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background-primary rounded-lg flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                    {social.icon === 'twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    )}
                    {social.icon === 'github' && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    )}
                    {social.icon === 'dribbble' && (
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 5.302c.896 1.454 1.432 3.141 1.432 4.954 0 .177-.004.353-.012.529-.446-.094-4.946-.997-9.421-.424.08-.195.157-.393.233-.594 2.016-5.191 3.015-6.426 3.768-6.465zm-1.194-3.425c1.446 1.65 2.363 3.797 2.534 6.166-.283-.062-3.101-.657-5.904-.29-.819-2.041-1.736-3.723-1.864-3.973 1.738-.748 3.597-1.254 5.234-1.903zm-6.859 2.106c.13.262 1.056 1.946 1.862 3.993-4.932 1.311-9.267 1.279-9.754 1.273.637-2.895 2.604-5.291 5.892-7.266zm-6.893 8.458c0-.088.002-.175.006-.262.467.005 5.642.079 11.071-1.541.222.433.433.871.632 1.313-.078.022-.157.046-.235.071-4.872 1.591-7.412 5.944-7.474 6.031-.013.016-.026.032-.039.048-1.478-1.331-2.419-3.251-2.961-5.66zm4.597 6.477c.042-.072 2.186-3.681 6.498-5.522 1.595 4.149 2.253 7.581 2.414 8.585-1.127.486-2.373.759-3.684.759-1.877 0-3.631-.55-5.228-1.522zm7.834-.364c-.117-.692-.705-3.855-2.19-7.884 4.127-.659 7.747.419 8.178.57-.609 2.675-2.264 4.937-4.583 6.314z"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="opacity-75 hover:opacity-100 hover:text-accent-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="opacity-75 hover:opacity-100 hover:text-accent-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="opacity-75 hover:opacity-100 hover:text-accent-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-75">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="opacity-75 hover:opacity-100 hover:text-accent-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
