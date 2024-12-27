// src/Pages/Plans/Plans.js
import React from 'react';
import './Plans.css'; // Make sure to create a CSS file for styling

// Sample data for plans
const plansData = [
  {
    title: "Basic Plan",
    description: "Get started with our basic plan to access essential features.",
    price: "$10/month",
    features: [
      "Basic support",
      "Limited access",
      "Email support"
    ]
  },
  {
    title: "Standard Plan",
    description: "Enjoy more features and enhanced support with our standard plan.",
    price: "$30/month",
    features: [
      "Priority support",
      "Full access",
      "Phone support"
    ]
  },
  {
    title: "Premium Plan",
    description: "Unlock all features and get premium support with our top-tier plan.",
    price: "$50/month",
    features: [
      "24/7 support",
      "Unlimited access",
      "Personalized support"
    ]
  }
];

function Plans() {
  return (
    <div className='plans-container'>
      <h2 className='section-title'>Our Plans</h2>
      <div className='plans-wrapper'>
        {plansData.map((plan, index) => (
          <div className='plan-card' key={index}>
            <h3 className='plan-title'>{plan.title}</h3>
            <p className='plan-description'>{plan.description}</p>
            <p className='plan-price'>{plan.price}</p>
            <ul className='plan-features'>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className='plan-feature'>{feature}</li>
              ))}
            </ul>
            <button className='plan-button'>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
