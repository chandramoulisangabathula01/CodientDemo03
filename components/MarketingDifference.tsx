
'use client';

import { useEffect, useRef, useState } from 'react';

const wordPairs = [
  'Labrum & Ligaments',
  'Frontend & Backend',
  'Design & Development',
  'Strategy & Execution',
  'Vision & Implementation'
];

const MarketingDifference = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPairIndex((prev) => (prev + 1) % wordPairs.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

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
    <section className="section-padding-2 bg-white">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <h2 className="section-title text-center ">
          Welcome to <span className='bg-brand-red text-white'> Codient </span>
          </h2>
          <h2 className="section-title text-center mb-16">
           Where Innovation Meets Impact
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">

            <p className="text-lg md:text-xl mb-8 text-center">
            In a world driven by technology, your business deserves more than just another digital solution—it needs a transformative experience. 
            At Codient, we don't just build websites and applications; we craft digital ecosystems that drive growth, engagement, and success.
            </p>
          </div>
          
          <div className="bg-black text-white p-8 md:p-12 lg:p-28 rounded-xl max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium mb-4">
                We aren't your usual marketing agency. We<br />
                understand the difference between
              </p>
              <p 
                className={`text-2xl md:text-3xl lg:text-4xl font-bold text-brand-red mb-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                {wordPairs[currentPairIndex]}
              </p>
              <p className="text-xl md:text-2xl font-medium">
                and use our knowledge and expertise to<br />
                make a difference
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingDifference;
