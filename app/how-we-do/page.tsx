'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Rocket, ClipboardList, BrainCircuit, Settings, CheckCircle } from 'lucide-react';

export default function HowWeDoPage() {
  const methodologies = [
    {
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business, goals, and challenges through in-depth consultations.',
      points: [
        'Business requirement analysis',
        'Market research and competitor analysis',
        'Project scope definition',
        'Timeline and milestone planning'
      ]
    },
    {
      title: 'Strategy Development',
      description: 'Our team creates a comprehensive strategy tailored to your specific needs and objectives.',
      points: [
        'Custom solution design',
        'Technology stack selection',
        'Marketing campaign planning',
        'Resource allocation'
      ]
    },
    {
      title: 'Implementation',
      description: 'We execute the strategy with precision, keeping you informed at every step.',
      points: [
        'Agile development methodology',
        'Regular progress updates',
        'Quality assurance testing',
        'Performance optimization'
      ]
    },
    {
      title: 'Launch & Support',
      description: 'We ensure a smooth launch and provide ongoing support for continuous improvement.',
      points: [
        'Deployment and launch management',
        'Performance monitoring',
        'Regular maintenance',
        'Continuous optimization'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-red/80">
            Our Methodology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured approach to digital excellence that drives measurable results
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-16 mb-20 relative">
          <div className="absolute inset-0 top-1/2 w-0.5 bg-gradient-to-b from-brand-red/20 to-transparent mx-auto" />
          {methodologies.map((methodology, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative z-10">
              <div className="flex items-start gap-6">
                <div className="bg-brand-red/10 p-4 rounded-xl">
                  {[<Rocket />, <ClipboardList />, <BrainCircuit />, <Settings />][index]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-red text-white rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">{methodology.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{methodology.description}</p>
                  <ul className="space-y-4">
                    {methodology.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-red mt-0.5" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment */}
        <div className="bg-gradient-to-r from-brand-red to-brand-red/90 rounded-2xl p-8 text-center shadow-lg mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Quality First Approach</h2>
            <p className="text-gray-100 mb-8">
              Our ISO-certified processes ensure exceptional quality at every stage
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-200">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-200">Success Rate</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-gray-200">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Digital Transformation?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's create something remarkable together
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              asChild 
              className="bg-brand-red hover:bg-brand-red/90 text-white"
              size="lg"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button 
              variant="outline" 
              className="text-foreground border-foreground hover:bg-brand-red/5"
              size="lg"
            >
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}