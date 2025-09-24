"use client";
import { siteConfig } from '../config/site'
import { useState } from 'react';
import { ChevronDown, MessageCircle, Clock, Code, Users, Star, FileText, HelpCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications or AI integrations can take 8-16 weeks. We provide detailed timelines during our discovery phase.",
      icon: Clock,
      category: "Timeline",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive support packages including hosting, security updates, feature enhancements, and 24/7 monitoring. Our goal is to be your long-term technology partner.",
      icon: Star,
      category: "Support",
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      question: "What's included in your AI agent development?",
      answer: "Our AI agents include natural language processing, integration with your existing systems, custom training on your data, and ongoing optimization. We handle everything from chatbots to complex automation workflows.",
      icon: Code,
      category: "AI Services",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We love collaborating with in-house teams. We can work as an extension of your team, provide technical consulting, or handle specific aspects of your project while you focus on other priorities.",
      icon: Users,
      category: "Collaboration",
      gradient: "from-amber-500 to-orange-400"
    },
    {
  question: `What makes ${siteConfig.name} different from other agencies?`,
      answer: "We combine deep technical expertise with a focus on business outcomes. Our team stays ahead of technology trends, especially in AI, and we're committed to delivering solutions that grow with your business.",
      icon: Star,
      category: "Our Approach",
      gradient: "from-rose-500 to-fuchsia-400"
    },
    {
      question: "Do you provide training and documentation?",
      answer: "Yes, we provide comprehensive documentation, training sessions for your team, and video tutorials. We want you to feel confident managing and updating your new systems.",
      icon: FileText,
      category: "Documentation",
      gradient: "from-sky-500 to-indigo-400"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-secondary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent-primary/3 to-accent-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15">
                <HelpCircle className="w-8 h-8 text-accent-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our services, process, and approach.
              <span className="block mt-2 text-accent-primary font-semibold">Everything you need to know, beautifully organized.</span>
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            
            return (
              <Reveal key={index} delay={index * 80}>
                <div 
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isOpen 
                      ? 'border-accent-primary/30 shadow-xl shadow-accent-primary/10 scale-105' 
                      : 'border-border/30 hover:border-accent-primary/20 hover:shadow-lg hover:scale-102'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Dynamic gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-glassmorphism-bg backdrop-blur-md" />
                  
                  {/* Content */}
                  <div className="relative p-6 md:p-7">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br ${faq.gradient} shadow-lg transition-transform duration-300 ${isOpen ? 'scale-110' : 'group-hover:scale-105'}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-text-primary leading-tight pr-8">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronDown 
                          className={`w-6 h-6 text-text-secondary transition-all duration-300 ${
                            isOpen ? 'rotate-180 text-accent-primary' : 'group-hover:text-accent-primary'
                          }`}
                        />
                      </div>
                    </div>
                    
                    {/* Answer */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-border/20">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-1 ring-accent-primary/20 transition-all duration-300" />
                </div>
              </Reveal>
            );
          })}
        </div>
        
        {/* Enhanced CTA section */}
        <Reveal delay={400}>
          <div className="text-center">
            <div className="inline-block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-glassmorphism-bg/80 to-glassmorphism-bg/60 border border-border/30 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-accent-primary" />
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">Still have questions?</h3>
              </div>
              <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
                Our team is here to help you understand how we can bring your vision to life.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Get in Touch
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
