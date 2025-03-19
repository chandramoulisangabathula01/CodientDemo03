"use client";
import { use, useEffect, useRef } from 'react';

const WelcomeSection = () => {
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
    <section className="section-padding bg-brand-lightgray">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Welcome to Codient – Where Innovation Meets Impact</h2>
            <p className="text-lg md:text-xl mb-8">
              In a world driven by technology, your business deserves more than just another digital solution—it needs a transformative experience. 
              At Codient, we don't just build websites and applications; we craft digital ecosystems that drive growth, engagement, and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;