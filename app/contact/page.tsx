'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-red/80">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your digital presence? Let's discuss how we can help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@codient.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">123 Business Avenue, Suite 100<br />City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Business Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-brand-red">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Saturday - Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-8 rounded-xl border shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-red/5 rounded-full -ml-20 -mb-20"></div>
          
          <div className="relative">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-muted-foreground mb-6">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-1">
                        First Name
                      </label>
                      <Input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-1">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        className="border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}