import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Home as HomeIcon,
  DollarSign,
  PiggyBank,
  Building,
  TrendingUp,
} from 'lucide-react';

const calculatorCategories = [
  {
    title: 'Mortgage Calculators',
    description: 'Calculate monthly payments, affordability, and loan terms',
    icon: Calculator,
    links: [
      { name: 'Mortgage Calculator', path: '/mortgage-calculator' },
      { name: 'Home Loan Calculator', path: '/home-loan-calculator' },
      { name: 'Mortgage Payment Calculator', path: '/mortgage-payment-calculator' },
      { name: 'Mortgage Affordability Calculator', path: '/mortgage-affordability-calculator' },
    ],
  },
  {
    title: 'Home Value Tools',
    description: 'Estimate property values and equity',
    icon: HomeIcon,
    links: [
      { name: 'Home Value Calculator', path: '/home-value-calculator' },
      { name: 'Home Price Calculator', path: '/home-price-calculator' },
      { name: 'Home Equity Calculator', path: '/home-equity-calculator' },
      { name: 'Property Tax Calculator', path: '/property-tax-calculator' },
    ],
  },
  {
    title: 'Investment Analysis',
    description: 'Analyze real estate investments and returns',
    icon: TrendingUp,
    links: [
      { name: 'Real Estate ROI Calculator', path: '/real-estate-roi-calculator' },
      { name: 'Rent vs. Buy Calculator', path: '/rent-vs-buy-calculator' },
    ],
  },
  {
    title: 'Transaction Tools',
    description: 'Plan your home purchase or sale',
    icon: DollarSign,
    links: [
      { name: 'Home Buying Calculator', path: '/home-buying-calculator' },
      { name: 'Home Selling Calculator', path: '/home-selling-calculator' },
    ],
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Casper Real Estate Calculators
            </h1>
            <p className="text-xl mb-8">
              Professional tools to help you make informed real estate decisions
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.athensgahomesales.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a FREE Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {calculatorCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-navy-600 mr-3" />
                <h2 className="text-2xl font-semibold text-navy-600">
                  {category.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-navy-600 hover:text-navy-800 flex items-center"
                    >
                      <span className="mr-2">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-600 mb-4">
              About Chris Casper
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Following in the footsteps of my grandfather, Dave Casper, I'm committed to providing
              the same level of exceptional service that made him a trusted name in local real estate.
              Growing up watching my grandfather help families find their dream homes, I learned the
              value of integrity, hard work, and putting clients first. Now, I'm excited to carry on
              that legacy and assist you with all your real estate needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;