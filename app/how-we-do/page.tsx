'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How We Do It</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our proven methodology ensures successful delivery of digital solutions that drive real business results.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 mb-16">
        {methodologies.map((methodology, index) => (
          <div key={index} className="border rounded-lg p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">{methodology.title}</h2>
                <p className="text-gray-600 mb-6">{methodology.description}</p>
              </div>
              <div>
                <ul className="space-y-4">
                  {methodology.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-red-600 mt-0.5" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          We maintain the highest standards of quality throughout our development and delivery process. 
          Our team follows industry best practices and uses cutting-edge technologies to ensure superior results.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-gray-600 mb-8">Let's discuss how we can help transform your digital presence</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}