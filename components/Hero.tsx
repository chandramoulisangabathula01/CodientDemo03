
'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-32 h-screen md:pt-40 relative">
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="/images/hero.svg"
          alt="Digital Technology Background"
          fill
          className="object-cover brightness-[0.2]"
          priority
        /> */}
      </div>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Digital Solutions For 
            <br /> 
            Modern Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Web Development, Mobile Apps & Digital Marketing
            <br />
            Transforming Ideas into Digital Reality
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="btn-primary">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="btn-secondary">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
