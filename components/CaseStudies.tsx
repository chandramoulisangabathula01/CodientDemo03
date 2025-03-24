
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { caseStudiesData } from '@/data/caseStudiesData';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="case-studies" className="min-h-screen flex items-center py-20">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <h2 className="section-title text-center mb-8">Case Studies</h2>
          
          <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            We have worked with all orthopaedic practices, diagnostic clinics,
            and a wide range of healthcare organizations to help them grow
            with clear and measured results.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl   mx-auto">
            {caseStudiesData.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className="case-study-card group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col"
                style={{ animationDelay: `${caseStudy.id * 0.1}s` }}
              >
                <Link href={`/case-studies/${caseStudy.slug}`} className="block h-full">
                  <div className="h-64 lg:h-72 relative overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white bg-brand-red text-xl font-medium px-6 py-3 border-2 border-white rounded-lg">View Case Study</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-brand-red font-semibold text-lg mb-3 px-4 py-1 bg-red-50 rounded-full">{caseStudy.category}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{caseStudy.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-brand-red hover:bg-brand-red/90">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
