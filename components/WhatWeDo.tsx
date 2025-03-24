"use client"
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const WhatWeDo = () => {
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
    <section id="what-we-do" className="pt-16 pb-9 bg-brand-lightgray max-w-7xl mx-auto px-4">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="section-title">What we do</h2>
              <div ref={contentRef} className="reveal">
                <p className="text-md mb-2">
                  We are a team of passionate digital innovators dedicated to transforming healthcare practices through strategic marketing and technology solutions.
                </p>
                <p className="text-md mb-2">
                  Our expertise lies in understanding the unique challenges of healthcare providers and creating tailored digital strategies that enhance their online presence and patient engagement.
                </p>
                <p className="text-md mb-12">
                  From website development to digital marketing campaigns, we provide comprehensive solutions that help healthcare practices thrive in the digital age while maintaining their focus on patient care.
                </p>
                <Button className="btn-primary flex items-center">
                  About us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 p-6 ">
              <div className="relative rounded-lg h-80 min-h-[30rem] md:h-96 overflow-hidden ">
                <Image
                  src="/images/process/whatwedo.png"
                  alt="What We Do"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;