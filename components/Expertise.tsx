
'use client';

import { useEffect, useRef } from 'react';

const Expertise = () => {
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
      <div className="container max-w-6xl mx-auto px-4">
        <div ref={sectionRef} className="reveal">
          <h2 className="section-title text-center mb-12">
            Digital Innovation &<br />
            Technology Excellence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
              <p className="text-black">
                Our team excels in cutting-edge web and app development, creating scalable solutions that drive business growth. From responsive websites to powerful mobile applications, we leverage the latest technologies to deliver high-performance digital solutions that exceed expectations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing Excellence</h3>
              <p className="text-black">
                We provide comprehensive digital marketing services including SEO, PPC, and social media strategies. Our data-driven approach ensures maximum ROI, helping businesses increase their online visibility, engage target audiences, and drive meaningful conversions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Client-Focused Solutions</h3>
              <p className="text-black">
                Understanding your business goals is our priority. We create tailored digital solutions that align with your objectives, whether you're a startup looking to make a bold entrance or an established brand ready to scale. Our approach focuses on delivering measurable results and long-term success.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Innovation & Support</h3>
              <p className="text-black">
                We stay ahead of digital trends to provide innovative solutions that give your business a competitive edge. Our commitment doesn't end at launch - we provide ongoing support, optimization, and updates to ensure your digital presence continues to evolve and perform at its best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
