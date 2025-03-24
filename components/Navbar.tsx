"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Users, Building2, Briefcase, FileText, HelpCircle, PhoneCall } from 'lucide-react';

const servicesLinks = [
  {
    title: "Web Design & Development",
    description: "Professional web solutions including logo design and UI/UX services for your digital presence.",
    icon: FileText,
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing services including PPC, SEO, and Google Ads.",
    icon: Building2,
  },
  {
    title: "Mobile App Development",
    description: "Get free consultation today for your mobile app development needs.",
    icon: PhoneCall,
  },
  {
    title: "Business Solutions",
    description: "QA testing, Business Analysis, IT infrastructure, and Cloud services.",
    icon: Briefcase,
  },
];

const caseStudyLinks = [
  {
    title: "Servizo",
    description: "Discover how we transformed Servizo's digital presence.",
    href: "/case-studies/servizo",
  },
  {
    title: "Monarch Painters",
    description: "Learn about our successful partnership with Monarch Painters.",
    href: "/case-studies/monarch-painters",
  },
  {
    title: "Wedding Wala",
    description: "See how we revolutionized Wedding Wala's online platform.",
    href: "/case-studies/wedding-wala",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-red">
              Codient
            </Link>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px]">
                    {caseStudyLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/how-we-do" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    How We Do
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/faqs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="default" className="bg-brand-red">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}