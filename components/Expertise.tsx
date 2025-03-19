
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
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <h2 className="section-title text-center mb-16">
            Healthcare, MSK and<br />
            Physio Marketing Experts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Knowledge and experience</h3>
              <p className="text-muted-foreground">
                Our team has worked with hundreds of healthcare practitioners across the UK. We understand clinical language, patient expectations, and how to communicate complex medical services in an accessible way. Our specialized knowledge allows us to create marketing that resonates with both patients and healthcare professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Ethics</h3>
              <p className="text-muted-foreground">
                We understand the ethical considerations of healthcare marketing. All content we produce follows professional guidelines and regulatory requirements. We ensure all claims are substantiated and that patient expectations are managed appropriately. Our approach balances effective marketing with clinical responsibility.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Patient Focus</h3>
              <p className="text-muted-foreground">
                We understand the patient journey from initial awareness of symptoms through to searching for solutions and selecting a provider. Our marketing strategies consider the emotional and practical needs of patients at each stage, helping you connect with them at the right moment with the right message.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Relationships</h3>
              <p className="text-muted-foreground">
                Healthcare is built on trust and relationships. Our marketing focuses on helping you build genuine connections with patients and referral sources. We emphasize your expertise, approachability, and patient-centered care to establish trust before the first appointment even begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
