
'use client';

import { useEffect, useRef } from 'react';
import { 
  Monitor, PenTool, Layout, TrendingUp, MousePointerClick, 
  Search, Target, Smartphone, Bug, Briefcase, Server, Cloud 
} from 'lucide-react';
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

const ServiceCard = ({ icon, title, description, link, special }: ServiceCardProps) => (
  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${special ? 'border-brand-red border-2' : ''}`}>
    <CardHeader>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-brand-red">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    {link && (
      <CardFooter>
        <Link href={link} className="text-brand-red hover:underline flex items-center gap-1">
          {special ? "Get Free Consultation Today!" : "Learn more"}
        </Link>
      </CardFooter>
    )}
  </Card>
);

const Services = () => {
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
      link: "/services/business-analysis"
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
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <h2 className="section-title text-center mb-12">Our Services</h2>
          <div ref={contentRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                special={service.special}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
