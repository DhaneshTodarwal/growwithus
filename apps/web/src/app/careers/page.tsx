'use client';

import { Briefcase, Heart, Zap, Users, TrendingUp, Globe, Rocket, Award, Coffee, Mail } from 'lucide-react';

export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Careers at GrowWithUs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join Our Growing Team
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            While we don't have any open positions right now, we're always interested in connecting with talented individuals who are passionate about AI and web development.
          </p>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              No Open Positions Currently
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're not actively hiring at the moment, but we're always growing and looking for exceptional talent. If you're interested in joining our team in the future, we'd love to hear from you!
            </p>
            <a
              href="mailto:officialgrowwithus1@gmail.com?subject=Future Career Opportunities&body=Hi, I'm interested in future opportunities at GrowWithUs."
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Submit Your Interest
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Working With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Even though we're not hiring right now, we'd love to hear from talented individuals who share our passion for innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:officialgrowwithus1@gmail.com?subject=Future Career Opportunities"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
