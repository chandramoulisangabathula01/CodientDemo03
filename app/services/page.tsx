import Services from '@/components/Services';
import { Metadata } from 'next';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
    icon: '🌐',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.',
    icon: '📱',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📲',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    icon: '🎨',
  },
  {
    title: 'QA Testing',
    description: 'Comprehensive quality assurance and testing services.',
    icon: '✅',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment services.',
    icon: '☁️',
  },
];

export const metadata: Metadata = {
  title: 'Our Services | Codient',
  description: 'Explore our comprehensive range of digital services and solutions.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* <section className="">
        <div className="container">
          <h1 className="section-title text-center">Our Services</h1>
          <p className="section-description text-center mb-12">
            We offer a comprehensive range of digital services to help your business thrive in the digital age.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 reveal"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Services />
    </main>
  );
}