import { CaseStudy, caseStudiesData } from '@/data/caseStudiesData';
import Image from 'next/image';

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { caseStudy } = await import('./page.server').then(mod => mod.default({
    params
  }));

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Case study not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Case Study Title */}
      <div className="mb-10 text-center">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Case Study</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{caseStudy.description}</p>
      </div>

      {/* Hero Image */}
      <div className="mb-16">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80`}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Services Section */}
      {/* <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-t-2 border-gray-200 pt-4">
            <h3 className="text-sm text-gray-500">Service One</h3>
          </div>
          <div className="border-t-2 border-gray-200 pt-4">
            <h3 className="text-sm text-gray-500">Service Two</h3>
          </div>
        </div>
      </div> */}

      {/* The Problem Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              {caseStudy.extended}
            </p>
            <p className="text-lg text-gray-700">
              Our client needed a solution that addressed their specific challenges while maintaining a user-friendly interface.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={`https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80`}
              alt="Problem illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* First Steps Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">First steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={`https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80`}
              alt="First steps illustration"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-4">
              The first step was to create a comprehensive plan that would address all the client's requirements. We conducted thorough research and analysis to understand the market and user needs.
            </p>
            <p className="text-lg text-gray-700">
              Our team worked closely with the client to develop a strategy that would deliver the best possible results.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps & Results Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Next steps & results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              After establishing the foundation, we implemented our solution and continuously refined it based on feedback and performance data.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The results were impressive, with significant improvements in key metrics:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              <li>{caseStudy.results.stat1.label}: {caseStudy.results.stat1.value}</li>
              <li>{caseStudy.results.stat2.label}: {caseStudy.results.stat2.value}</li>
              <li>{caseStudy.results.stat3.label}: {caseStudy.results.stat3.value}</li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={`https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80`}
              alt="Results illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mb-16 bg-gray-900 text-white py-12 px-8 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl italic mb-6">
            We are so impressed by the team at HEPCO! They are so efficient in helping with marketing our out-of-hours service. 
            Louise is fantastic to work with - she is always on the ball and has a ton of ideas and tips!
          </p>
          <p className="font-semibold">- Client Name, {caseStudy.title}</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Let's create something amazing together
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}