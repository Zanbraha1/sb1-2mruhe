import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MortgageCalculator from './pages/MortgageCalculator';
import HomeLoanCalculator from './pages/HomeLoanCalculator';
import MortgageAffordabilityCalculator from './pages/MortgageAffordabilityCalculator';
import HomePriceCalculator from './pages/HomePriceCalculator';
import RentVsBuyCalculator from './pages/RentVsBuyCalculator';
import HomeEquityCalculator from './pages/HomeEquityCalculator';
import MortgagePaymentCalculator from './pages/MortgagePaymentCalculator';
import HomeValueCalculator from './pages/HomeValueCalculator';
import PropertyTaxCalculator from './pages/PropertyTaxCalculator';
import RealEstateROICalculator from './pages/RealEstateROICalculator';
import HomeSellingCalculator from './pages/HomeSellingCalculator';
import HomeBuyingCalculator from './pages/HomeBuyingCalculator';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
            <Route path="/home-loan-calculator" element={<HomeLoanCalculator />} />
            <Route path="/mortgage-affordability-calculator" element={<MortgageAffordabilityCalculator />} />
            <Route path="/home-price-calculator" element={<HomePriceCalculator />} />
            <Route path="/rent-vs-buy-calculator" element={<RentVsBuyCalculator />} />
            <Route path="/home-equity-calculator" element={<HomeEquityCalculator />} />
            <Route path="/mortgage-payment-calculator" element={<MortgagePaymentCalculator />} />
            <Route path="/home-value-calculator" element={<HomeValueCalculator />} />
            <Route path="/property-tax-calculator" element={<PropertyTaxCalculator />} />
            <Route path="/real-estate-roi-calculator" element={<RealEstateROICalculator />} />
            <Route path="/home-selling-calculator" element={<HomeSellingCalculator />} />
            <Route path="/home-buying-calculator" element={<HomeBuyingCalculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;