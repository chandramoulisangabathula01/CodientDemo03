
'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Monitor, PenTool, Layout, TrendingUp, MousePointerClick, 
  Search, Target, Smartphone, Bug, Briefcase, Server, Cloud 
} from 'lucide-react';
import ServiceDialog from './ServiceDialog';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  special?: boolean;
}

// Update ServiceCard container class
const ServiceCard = ({ icon, title, description, link, special }: ServiceCardProps) => {
  return (
    <div 
      onClick={link ? undefined : () => window.location.href = '/contact'}
      className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer h-full min-h-[420px] ${special ? 'border-brand-red border-2' : 'border border-gray-200'} bg-gradient-to-br from-white to-gray-50 hover:from-brand-red/5 hover:to-white`}>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-brand-red transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-brand-red transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 flex-grow">
        {description}
      </p>
      {link && (
        <div className="mt-6">
          <Link 
            href={link} 
            className="inline-flex items-center gap-2 text-brand-red font-medium group-hover:text-brand-red/80 transition-colors duration-300"
          >
            {special ? "Get Free Consultation Today!" : "Learn more"}
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
    imagePath: string;
  } | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Design & Development",
      description: "Crafting visually stunning, high-performance websites tailored to your brand, ensuring seamless user experience, responsiveness, and optimized functionality across all devices.",
      link: "/services/web-design"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Logo Design",
      description: "Elevate your brand identity with a custom-designed, memorable logo that reflects your vision, resonates with your audience, and sets you apart.",
      link: "/services/logo-design"
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive, engaging, and user-friendly designs that enhance user experience, drive conversions, and establish a strong digital presence for your business.",
      link: "/services/ui-ux-design"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing strategies, including SEO, PPC, social media, and content marketing for maximum engagement and conversions.",
      link: "/services/digital-marketing"
    },
    {
      icon: <MousePointerClick className="h-6 w-6" />,
      title: "PPC",
      description: "Maximize ROI with targeted Pay-Per-Click campaigns, ensuring your business reaches the right audience with optimized ad placements and cost-effective strategies.",
      link: "/services/ppc"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO",
      description: "Boost your search rankings with expert SEO strategies, increasing visibility, organic traffic, and conversions through on-page, off-page, and technical optimizations.",
      link: "/services/seo"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Google Ads",
      description: "Drive instant, high-quality traffic with expertly managed Google Ads campaigns designed to maximize reach, lead generation, and return on investment.",
      link: "/services/google-ads"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Build powerful, user-friendly mobile applications tailored to your business needs, ensuring seamless performance, scalability, and user engagement.",
      link: "/services/mobile-app",
      special: true
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "QA and Testing",
      description: "Deliver flawless digital experiences with rigorous quality assurance and testing services, ensuring bug-free, high-performance, and secure applications.",
      link: "/services/qa-testing"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Analyst",
      description: "Transform business challenges into growth opportunities with expert analysis, data-driven strategies, and insights that enhance efficiency and decision-making.",
      link: "/services/business-analyst"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "IT Infrastructure",
      description: "Optimize your IT setup with secure, scalable, and reliable infrastructure solutions, ensuring seamless business operations and enhanced productivity.",
      link: "/services/it-infrastructure"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Services",
      description: "Leverage cloud computing for secure, scalable, and cost-efficient solutions, enhancing collaboration, data security, and business agility.",
      link: "/services/cloud-services"
    
    },
   
  ];

  return (
    <section id="services" className="container max-w-6xl mx-auto px-4 pb-16 pt-8 ">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-red/80">Our Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Discover our comprehensive range of digital solutions tailored to elevate your business</p>
      
          <div ref={contentRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-fr">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="h-[50%]"
                onClick={() => setSelectedService({
                  title: service.title,
                  description: service.description,
                  icon: service.icon,
                  imagePath: `/images/services/${service.title.toLowerCase().replace(/ /g, '-')}.jpg`
                })}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  special={service.special}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedService && (
        <ServiceDialog
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default Services;
