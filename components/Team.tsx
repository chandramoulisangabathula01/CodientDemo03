
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Team = () => {
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
    <section className="section-padding bg-white max-w-7xl mx-auto px-4">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8">
            Meet the Codient Team
          </h2>
          
          <div className="max-w-4xl mb-8">
            <p className="text-lg text-black mb-8">
              At Codient, we are a team of passionate digital innovators dedicated to crafting transformative digital ecosystems. 
              Our expertise spans web design, UI/UX, digital marketing, and more, all aimed at driving growth and success for 
              our clients. We believe in aligning technology with business objectives to create tailored solutions that make a 
              real impact. Discover more about our dynamic team and how we can help elevate your business.
            </p>
            
            <Link href="/team">
              <Button className="bg-brand-red hover:bg-brand-red/90">
                Meet the team
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card className="overflow-hidden rounded-lg border-none shadow-md">
              <div className="aspect-square bg-gray-200 relative">
                <Image
                  src="/images/team/team1.svg"
                  alt="Team member"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Card>
            
            <Card className="overflow-hidden rounded-lg border-none shadow-md">
              <div className="aspect-square bg-gray-200 relative">
                <Image
                  src="/images/team/team3.svg"
                  alt="Team in a meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Card>
            
            <Card className="overflow-hidden rounded-lg border-none shadow-md">
              <div className="aspect-square bg-gray-200 relative">
                <Image
                  src="/images/team/team2.svg"
                  alt="Team member"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
