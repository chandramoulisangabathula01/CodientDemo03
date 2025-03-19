"use client"
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Process = () => {
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

  return (
    <section id="approach" className="section-padding bg-brand-lightgray">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              {/* In a real implementation, this would be an actual image */}
              <div className="bg-gray-200 rounded-lg h-80 min-h-[30rem] md:h-96 flex items-center justify-center">
                <span className="text-gray-500">Healthcare professional working</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="section-title">How we do it</h2>
              <div ref={contentRef} className="reveal">
                <p className="text-lg mb-6">
                  Like your clinical work, we adapt to specific patient needs. Every practice is unique, and every town has its own healthcare landscape, so we carefully build marketing that makes you stand out.
                </p>
                <p className="text-lg mb-6">
                  You have a specialized skill set and training - working with the human body in a way most people don't understand. We have a specialized skill set too - online marketing that gets results for healthcare professionals specifically.
                </p>
                <p className="text-lg mb-6">
                  Through our years working with healthcare providers, we've built systems and methods that work specifically for clinics like yours. Our healthcare marketing approach helps you attract the patients you're looking for, instead of getting lost online.
                </p>
                <Button className="btn-primary flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
