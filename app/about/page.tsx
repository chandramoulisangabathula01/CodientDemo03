'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import Mission from '@/components/about/Mission';
import Expertise from '@/components/about/Expertise';
import Process from '@/components/about/Process';
import { Rocket, Users, Briefcase, LayoutTemplate, Code2, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-red/80">
            About Codient
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering digital solutions since 2020 - Transforming businesses through technology
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <Rocket className="h-8 w-8 text-brand-red mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">150+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <Users className="h-8 w-8 text-brand-red mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <Briefcase className="h-8 w-8 text-brand-red mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-muted-foreground">Global Clients</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <Code2 className="h-8 w-8 text-brand-red mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-muted-foreground">Tech Experts</div>
          </div>
        </div> */}

        {/* Mission & Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-red/5 rounded-full"></div>
            <Mission />
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-red/5 rounded-full"></div>
            <Expertise />
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to digital success
            </p>
          </div>
          <Process />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brand-red to-brand-red/90 rounded-2xl p-8 text-center shadow-lg">
          <Globe className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Digital Transformation?</h2>
          <p className="text-gray-100 mb-8 max-w-xl mx-auto">
            Let's create something remarkable together. Reach out to start your journey.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              asChild 
              className="bg-white text-brand-red hover:bg-gray-100 hover:text-brand-red/90"
              size="lg"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button 
              variant="outline" 
              className="text-white hover:bg-white/10 bg-brand-red border-white"
              size="lg"
            >
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}