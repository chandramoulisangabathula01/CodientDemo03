'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import Mission from '@/components/about/Mission';
import Expertise from '@/components/about/Expertise';
import Process from '@/components/about/Process';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Codient</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a full-service digital agency specializing in web development, digital marketing, and business solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <Mission />
        <Expertise />
      </div>

      <div className="text-center mb-16">
        <Process />

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Let's discuss how we can help your business grow</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/case-studies">View Our Work</Link>
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}