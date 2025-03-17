import React from 'react';
import './Pricing.css';
import pricingPDF from '../assets/BeigeMinimalistBeautyStudioPriceList.pdf';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>Our Pricing</h1>
      <div className="pdf-container">
        <iframe
          src={`${pricingPDF}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
          width="100%"
          height="800px"
          frameBorder="0"
          title="Pricing PDF"
          style={{ background: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default Pricing;