
'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amanda Hood",
    company: "Bodywork by Amanda",
    content: "I contacted Michael having heard him speak during the Therapy live conference, he has totally transformed my business. He and his company gave me a new name, logo, fantastic website and Google My Business and gave me lots of marketing advice, highly recommend.",
    image: "/lovable-uploads/d5b52801-3f2a-49f3-b185-aa48d0fe2d77.png",
    rating: 5
  },
  {
    id: 2,
    name: "John Smith",
    company: "Elite Physiotherapy",
    content: "Working with this team has been a game-changer for our practice. Our online bookings increased by 45% within the first three months, and we're now fully booked weeks in advance.",
    image: "/placeholder.svg",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    company: "Advanced Orthopaedics",
    content: "The specialized healthcare marketing approach made all the difference. They understand our patients' needs and created messaging that connects with our target audience effectively.",
    image: "/placeholder.svg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
    <section className="section-padding bg-brand-black text-white">
      <div className="container">
        <div ref={sectionRef} className="reveal">
          <Card className="bg-brand-black border-none shadow-none">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-1 w-full">
                <Quote className="text-brand-red absolute -top-10 -left-6 w-16 h-16 opacity-80" />
                
                <div className="mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <div className="text-sm mb-2">{testimonials[currentIndex].name} - {testimonials[currentIndex].company}</div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Really happy with the team and their efforts
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {testimonials[currentIndex].content}
                </p>
                
                <Button variant="outline" size="sm" className="bg-transparent text-white border-brand-red hover:bg-brand-red">
                  Read more
                </Button>
                
                <div className="flex gap-2 mt-8">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-transparent border border-gray-600 hover:bg-brand-red hover:border-brand-red" 
                    onClick={prevTestimonial}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-transparent border border-gray-600 hover:bg-brand-red hover:border-brand-red"
                    onClick={nextTestimonial}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <Quote className="text-brand-red absolute -bottom-10 right-0 w-16 h-16 opacity-80 rotate-180" />
              </div>
              
              <div className="w-full md:w-auto flex-shrink-0">
                <Avatar className="w-60 h-80 rounded-md">
                  <AvatarImage 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="object-cover"
                  />
                  <AvatarFallback>{testimonials[currentIndex].name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
