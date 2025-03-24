'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageSquare, LayoutTemplate, Rocket, Smartphone, BarChart } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Development',
      icon: <ChevronRight className="h-5 w-5 text-brand-red" />,
      items: [
        {
          question: 'How long does website development take?',
          answer: 'Custom projects typically take 4-8 weeks, depending on complexity. We provide a detailed timeline during our initial consultation.'
        },
        {
          question: 'Do you build mobile-friendly websites?',
          answer: 'Yes! All our websites are fully responsive and optimized for all device sizes.'
        }
      ]
    },
    {
      category: 'Design',
      icon: <LayoutTemplate className="h-5 w-5 text-brand-red" />,
      items: [
        {
          question: 'What\'s included in your design process?',
          answer: 'Our process includes discovery sessions, wireframing, prototype development, and multiple revision rounds.'
        },
        {
          question: 'Can you redesign my existing website?',
          answer: 'Absolutely! We specialize in modernizing websites while preserving brand identity.'
        }
      ]
    },
    {
      category: 'Marketing',
      icon: <Rocket className="h-5 w-5 text-brand-red" />,
      items: [
        {
          question: 'How soon will I see SEO results?',
          answer: 'Initial improvements appear in 8-12 weeks, with full results typically in 6-12 months.'
        },
        {
          question: 'What\'s your PPC management approach?',
          answer: 'We focus on targeted campaigns with continuous optimization for maximum ROI.'
        }
      ]
    },
    {
      category: 'Mobile Apps',
      icon: <Smartphone className="h-5 w-5 text-brand-red" />,
      items: [
        {
          question: 'What platforms do you develop for?',
          answer: 'We build native iOS/Android apps and cross-platform solutions using Flutter.'
        },
        {
          question: 'Do you provide app maintenance?',
          answer: 'Yes, we offer ongoing support packages for updates and performance optimization.'
        }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-red/80">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our services and processes
          </p>
        </div>

        {/* Category Sections */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((section, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red/10 p-2 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold text-foreground">{section.category}</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                    <AccordionTrigger className="text-left hover:no-underline hover:text-brand-red px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-brand-red to-brand-red/90 rounded-2xl p-8 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-100 mb-8">Our team is ready to help you with any inquiry</p>
            <Button 
              size="lg" 
              className="bg-white text-brand-red hover:bg-gray-100 hover:text-brand-red/90 text-lg"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}