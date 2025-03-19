'use client';

export default function Expertise() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Web Solutions</h3>
          <p className="text-gray-600">Custom web development, UI/UX design, and responsive websites that drive results.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Digital Marketing</h3>
          <p className="text-gray-600">Comprehensive marketing strategies including SEO, PPC, and social media campaigns.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Technical Services</h3>
          <p className="text-gray-600">Mobile app development, QA testing, and cloud infrastructure solutions.</p>
        </div>
      </div>
    </div>
  );
}