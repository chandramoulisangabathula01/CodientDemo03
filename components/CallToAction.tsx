
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
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
    <section className="section-padding bg-white">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <div className="bg-black text-white p-6 md:p-8 lg:p-24 rounded-3xl max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium mb-4">
                Welcome to Codient – Where Innovation Meets Impact
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ed5c0a] mb-4">
                Transformative digital solutions for growth and success
              </p>
              <p className="text-xl md:text-2xl font-medium mb-8">
                Let's build something remarkable together
              </p>
              <Link href="/contact">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-lg">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
