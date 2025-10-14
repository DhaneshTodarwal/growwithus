import { siteConfig } from '../../config/site'
export default function ThemePreviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto px-4">
          <h1>{siteConfig.name} Theme Preview</h1>
          <p className="subheading mt-4">
            Experience our beautiful light and dark themes with perfect accessibility and modern design.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Typography Showcase */}
      <section className="max-w-6xl mx-auto p-8">
        <h2>Typography Hierarchy</h2>
        <div className="mt-6 space-y-4">
          <h1>Heading 1 - Main Headlines</h1>
          <h2>Heading 2 - Section Titles</h2>
          <h3>Heading 3 - Subsection Titles</h3>
          <p className="subheading">Subheading - Supporting text for sections</p>
          <p>Body text - This is regular paragraph text with proper line height and readability. It demonstrates how the theme handles longer content blocks.</p>
          <a href="#" className="inline-block">This is a styled link with hover effects</a>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="mb-6">Service Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="mb-2">Website Development</h3>
            <p className="text-sm mb-4">Create stunning, responsive websites that convert visitors into customers.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
          <div className="card">
            <h3 className="mb-2">App Development</h3>
            <p className="text-sm mb-4">Build powerful mobile and desktop applications for any platform.</p>
            <a href="#" className="btn btn-secondary">Get Started</a>
          </div>
          <div className="card">
            <h3 className="mb-2">AI Solutions</h3>
            <p className="text-sm mb-4">Implement intelligent automation and AI-powered features.</p>
            <a href="#" className="btn btn-primary">Explore AI</a>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Button Variations */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="mb-6">Button Styles</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary">Primary Action</button>
          <button className="btn btn-secondary">Secondary Action</button>
          <a href="#" className="btn btn-primary">Link as Button</a>
          <button className="btn btn-secondary" disabled>Disabled Button</button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Form Elements */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="mb-6">Form Elements</h2>
        <div className="card max-w-md">
          <h3 className="mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Color Palette Display */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="mb-6">Color Palette</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4">Current Theme Colors</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded border" style={{backgroundColor: 'var(--bg-primary)'}}></div>
                <span>Background Primary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded border" style={{backgroundColor: 'var(--bg-secondary)'}}></div>
                <span>Background Secondary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded border" style={{backgroundColor: 'var(--accent-primary)'}}></div>
                <span>Accent Primary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded border" style={{backgroundColor: 'var(--accent-secondary)'}}></div>
                <span>Accent Secondary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded border" style={{backgroundColor: 'var(--card-bg)'}}></div>
                <span>Card Background</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4">Text Colors</h3>
            <div className="space-y-3">
              <p style={{color: 'var(--text-primary)'}}>Primary Text Color</p>
              <p style={{color: 'var(--text-secondary)'}}>Secondary Text Color</p>
              <a href="#" style={{color: 'var(--accent-secondary)'}}>Link Color</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
