'use client';

export default function Process() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-3">1. Discovery</h3>
          <p className="text-gray-600">Understanding your business goals and challenges</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-3">2. Strategy</h3>
          <p className="text-gray-600">Developing a customized action plan</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-3">3. Implementation</h3>
          <p className="text-gray-600">Executing solutions with precision</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-3">4. Optimization</h3>
          <p className="text-gray-600">Continuous improvement and refinement</p>
        </div>
      </div>
    </div>
  );
}