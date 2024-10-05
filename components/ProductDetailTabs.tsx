"use client"

import { useState } from 'react';
import PaymentMethods from '@/components/PaymentMethods';
import WhatsInTheBox from '@/components/WhatsInTheBox';
import ProductReviews from '@/components/ProductReviews';

export default function ProductDetailTabs() {
  const [activeTab, setActiveTab] = useState('reviews');

  const tabs = [
    { id: 'reviews', label: 'Reviews' },
    { id: 'payment', label: 'Payment' },
    { id: 'box', label: 'What\'s in the Box' },
  ];

  return (
    <div className="ios-card p-6">
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`ios-tab py-2 px-4 ${activeTab === tab.id ? 'ios-tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 'reviews' && <ProductReviews />}
        {activeTab === 'payment' && <PaymentMethods />}
        {activeTab === 'box' && <WhatsInTheBox />}
      </div>
    </div>
  );
}