import React, { ReactNode } from 'react';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  blogContent: string;
}

const CalculatorLayout = ({ title, description, children, blogContent }: CalculatorLayoutProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy-600 mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {children}
        </div>

        <div className="prose max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-navy-600 mb-4">How to Use This Calculator</h2>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: blogContent }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorLayout;