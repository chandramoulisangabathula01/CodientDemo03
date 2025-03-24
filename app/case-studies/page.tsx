'use client';

import Link from 'next/link';
import { caseStudiesData } from '@/data/caseStudiesData';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-red/80">
            Our Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform through technology
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudiesData.map((study) => (
            <div key={study.slug} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Briefcase className="h-8 w-8 text-brand-red" />
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{study.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="text-brand-red hover:text-brand-red/80 flex items-center gap-2"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-2 w-2 bg-brand-red rounded-full" />
                    {study.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brand-red to-brand-red/90 rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-100 mb-8 max-w-xl mx-auto">
            Let's collaborate to create remarkable results for your business
          </p>
          <Button 
            asChild
            className="bg-white text-brand-red hover:bg-gray-100 hover:text-brand-red/90 text-lg"
            size="lg"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}