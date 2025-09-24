export default function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="card bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4">Stay in the Loop</h2>
            <p className="subheading mb-8">
              Get the latest insights on technology trends, business strategies, 
              and digital innovation delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background-primary text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                <span>Subscribe</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            
            <p className="text-sm opacity-60 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
