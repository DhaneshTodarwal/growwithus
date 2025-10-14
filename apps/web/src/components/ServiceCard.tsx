import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  gradient: string;
  badge?: string;
}

export default function ServiceCard({ icon, title, description, href, gradient, badge }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-2xl border border-border/20 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent-primary/20">
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Content Container */}
      <div className="relative p-8 bg-surface/95 backdrop-blur-sm h-full flex flex-col">
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            {badge}
          </div>
        )}
        
        {/* Icon Container */}
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 group-hover:from-accent-primary/20 group-hover:to-accent-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          <div className="text-accent-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Text Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-accent-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-8">
            {description}
          </p>
        </div>
        
        {/* Learn More Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/20">
          <div className="font-semibold text-accent-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <div className="text-xs text-text-secondary/60 group-hover:text-text-secondary transition-colors duration-300">
            Explore →
          </div>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Link>
  );
}
