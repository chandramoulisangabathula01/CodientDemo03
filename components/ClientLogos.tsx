"use client"
import { useEffect, useRef } from 'react';

const ClientLogos = () => {
  const clientsRef = useRef<HTMLDivElement>(null);

  // Sample client logos - in a real implementation, these would be imported images
  const clients = [
    { name: "Smith & Jones", logo: "logo1" },
    { name: "Physiotheraphy Partners", logo: "logo2" },
    { name: "Health Plus", logo: "logo3" },
    { name: "MedCare", logo: "logo4" },
    { name: "WellFit", logo: "logo5" },
    { name: "Spine Clinic", logo: "logo6" },
    { name: "Premier Health", logo: "logo7" },
    { name: "LifeCare", logo: "logo8" },
    { name: "Total Wellness", logo: "logo9" },
    { name: "Joint Works", logo: "logo10" },
  ];

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

    if (clientsRef.current) {
      observer.observe(clientsRef.current);
    }

    return () => {
      if (clientsRef.current) {
        observer.unobserve(clientsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-brand-lightgray">
      <div className="container">
        <div ref={clientsRef} className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 items-center justify-items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* In a real implementation, this would be an actual logo image */}
                <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
