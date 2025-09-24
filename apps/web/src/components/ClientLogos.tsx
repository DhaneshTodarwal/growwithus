export default function ClientLogos() {
  const clients = [
    { name: "TechCorp", logo: "/logos/techcorp.svg" },
    { name: "StartupX", logo: "/logos/startupx.svg" },
    { name: "InnovateLabs", logo: "/logos/innovatelabs.svg" },
    { name: "DigitalFlow", logo: "/logos/digitalflow.svg" },
    { name: "CloudTech", logo: "/logos/cloudtech.svg" },
    { name: "AIVentures", logo: "/logos/aiventures.svg" },
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="subheading mb-12 text-sm uppercase tracking-wider">
          Trusted by innovative companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center h-16 transition-transform hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder logos - in production, replace with actual logo images */}
              <div className="w-24 h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded flex items-center justify-center text-xs font-semibold text-white">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
