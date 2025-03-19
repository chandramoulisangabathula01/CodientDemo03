'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const faqs = [
    // Web Design & Development FAQs
    {
      question: 'What is web design and development?',
      answer: 'Web design focuses on the look, feel, and user experience, while web development ensures functionality, performance, and responsiveness across all devices.'
    },
    {
      question: 'How long does it take to develop a website?',
      answer: 'A custom website typically takes 4-8 weeks, depending on design complexity, content requirements, and development scope.'
    },
    {
      question: 'Do you build mobile-friendly websites?',
      answer: 'Yes! We create responsive, mobile-optimized websites to ensure a seamless experience across all devices and screen sizes.'
    },
    {
      question: 'Will my website be SEO-friendly?',
      answer: 'Absolutely! We follow best SEO practices, including fast load times, clean code, and optimized content to boost search engine rankings.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes, we specialize in website redesigns to improve user experience, performance, and SEO rankings while maintaining your brand identity.'
    },
    // Logo Design FAQs
    {
      question: 'Why is a professional logo important for my business?',
      answer: 'A well-designed logo creates brand recognition, builds trust, and visually communicates your company\'s values and identity.'
    },
    {
      question: 'How do you create a unique logo design?',
      answer: 'We analyze your brand, target audience, and industry trends to create a memorable, custom-designed logo tailored to your business.'
    },
    {
      question: 'Can I request revisions on my logo design?',
      answer: 'Yes! We offer multiple revision rounds to ensure your logo perfectly represents your brand.'
    },
    {
      question: 'What file formats will I receive for my logo?',
      answer: 'You\'ll receive high-resolution files in PNG, JPEG, SVG, and AI formats for versatile use across digital and print media.'
    },
    {
      question: 'Do you provide brand identity services along with logo design?',
      answer: 'Yes! We offer complete brand identity design, including color schemes, typography, and brand guidelines.'
    },
    // UI/UX Design FAQs
    {
      question: 'What is UI/UX design, and why is it important?',
      answer: 'UI (User Interface) focuses on design aesthetics, while UX (User Experience) enhances usability, ensuring a smooth and engaging experience for users.'
    },
    {
      question: 'Do you conduct user research before designing?',
      answer: 'Yes! We analyze user behavior, preferences, and pain points to create intuitive designs that improve engagement and conversions.'
    },
    {
      question: 'How does UI/UX impact SEO?',
      answer: 'A well-designed UI/UX improves site navigation, reduces bounce rates, and enhances mobile-friendliness, all of which boost SEO rankings.'
    },
    {
      question: 'Can you improve my existing website\'s UI/UX?',
      answer: 'Absolutely! We conduct UX audits and redesign interfaces to enhance user experience and increase conversions.'
    },
    {
      question: 'What tools do you use for UI/UX design?',
      answer: 'We use industry-leading tools like Figma, Adobe XD, and Sketch to create user-centric designs.'
    },
    // Digital Marketing FAQs
    {
      question: 'What is digital marketing, and how can it help my business?',
      answer: 'Digital marketing uses online strategies like SEO, PPC, social media, and content marketing to increase brand awareness and drive sales.'
    },
    {
      question: 'Which digital marketing services do you offer?',
      answer: 'We provide SEO, PPC, Google Ads, social media marketing, content marketing, and email marketing.'
    },
    {
      question: 'How long does it take to see digital marketing results?',
      answer: 'SEO takes 3-6 months, while PPC and paid ads can generate leads almost instantly.'
    },
    {
      question: 'Can you manage my social media accounts?',
      answer: 'Yes! We create and manage social media campaigns to grow engagement and brand presence.'
    },
    {
      question: 'Do you offer customized digital marketing strategies?',
      answer: 'Yes! We tailor marketing plans based on your business goals, industry, and target audience.'
    },
    // Mobile App Development FAQs
    {
      question: 'What mobile app development services do you offer?',
      answer: 'We build custom iOS, Android, and cross-platform apps tailored to your business needs.'
    },
    {
      question: 'How long does it take to develop a mobile app?',
      answer: 'On average, 3-6 months, depending on app complexity.'
    },
    {
      question: 'Do you offer post-launch app support?',
      answer: 'Yes! We provide maintenance, updates, and performance optimizations.'
    },
    // QA and Testing FAQs
    {
      question: 'Why is quality assurance (QA) important?',
      answer: 'QA ensures your website or app is bug-free, secure, and user-friendly.'
    },
    {
      question: 'What testing services do you offer?',
      answer: 'We provide functional, usability, performance, and security testing.'
    },
    // Business Analyst FAQs
    {
      question: 'What does a business analyst do?',
      answer: 'We analyze business needs, streamline operations, and optimize digital solutions.'
    },
    {
      question: 'How can a business analyst help my company?',
      answer: 'We improve workflows, identify opportunities, and enhance decision-making.'
    },
    // IT Infrastructure FAQs
    {
      question: 'What IT infrastructure services do you provide?',
      answer: 'We set up secure networks, cloud storage, and server management.'
    },
    {
      question: 'Can you upgrade my existing IT setup?',
      answer: 'Yes! We enhance security, scalability, and performance.'
    },
    // Cloud Services FAQs
    {
      question: 'What are cloud services, and why do I need them?',
      answer: 'Cloud services provide secure, scalable storage and computing power for businesses.'
    },
    {
      question: 'Do you offer cloud migration services?',
      answer: 'Yes! We help businesses move to cloud-based solutions for better efficiency.'
    
    },
    {
      question: 'What can I expect from working with Codient?',
      answer: 'Expect professional service, clear communication, strategic planning, and a focus on achieving your business goals through innovative digital solutions.'
    },
    {
      question: 'How long does it take to build a new website?',
      answer: 'Website development typically takes 8-12 weeks, depending on complexity. We\'ll provide a detailed timeline during project planning.'
    },
    {
      question: 'Do you use website templates?',
      answer: 'We create custom designs tailored to your brand and business needs, though we may use frameworks to ensure efficient development and best practices.'
    },
    {
      question: 'What type of reporting will you provide to keep us updated on our campaigns?',
      answer: 'We provide detailed monthly reports covering key metrics, performance analysis, and recommendations. Reports are customized to your specific goals and KPIs.'
    },
    {
      question: 'Are you really that good? (Hint, yes!)',
      answer: 'Our track record of successful projects and satisfied clients speaks for itself. We invite you to review our case studies and client testimonials.'
    },
    {
      question: 'Do you offer content marketing services?',
      answer: 'Yes, we provide comprehensive content marketing services including strategy development, content creation, and distribution across various channels.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}