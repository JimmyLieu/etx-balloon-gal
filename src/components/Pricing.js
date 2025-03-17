import React from "react";
import './Pricing.css';

const PriceList = () => {
  const priceData = [
    {
      category: "HELIUM CHART",
      subcategories: [
        {
          name: "LATEX BALLOON",
          items: [
            { name: "12 IN SINGLE", price: "$3.99" },
            { name: "12 IN 1/2 DOZ", price: "$21.00" },
            { name: "12 IN DOZEN", price: "$39.00" },
            { name: "18 IN SINGLE", price: "$6.00" },
            { name: "36 IN SINGLE", price: "$33.98" },
          ]
        },
        {
          name: "MAYLAR",
          items: [
            { name: "18 IN SINGLE", price: "$16.99" },
            { name: "24 IN - 34 IN SINGLE", price: "$21.50" },
            { name: "31 IN - 36 IN SINGLE", price: "$25.98" },
            { name: "40 IN - 42 IN SINGLE", price: "$29.64" },
            { name: "31 IN - 36 IN NUMBER", price: "$19.98" },
            { name: "31 IN - 36 IN LETTER", price: "$21.98" },
          ]
        },
        {
            name: "BUBBLE BALLOON",
            hasDualPricing: true,
            items: [
                { 
                    name: "5 IN CLEAR", 
                    air: "$5.00",
                    helium: ""
                  },
                  { 
                    name: "5 IN CONFETTI", 
                    air: "$11.00",
                    helium: ""
                  },
                  { 
                    name: "18 IN CLEAR", 
                    air: "$6.50",
                    helium: "$9.49"
                  },
                  { 
                    name: "18 IN CONFETTI", 
                    air: "$12.50",
                    helium: "$15.49"
                  },
                  { 
                    name: "24 IN CLEAR", 
                    air: "$10.25",
                    helium: "$14.90"
                  },
                  { 
                    name: "24 IN CONFETTI", 
                    air: "$15.50",
                    helium: "$20.15"
                  },   
                  { 
                    name: "36 IN CLEAR", 
                    air: "$13.97",
                    helium: "$21.95"
                  },
                  { 
                    name: "24 IN CONFETTI", 
                    air: "$19.97",
                    helium: "$27.95"
                  }, 
             
            ]
          }
      ]
    },
    {
      category: "Bubble Balloon",
      subcategories: [
        {
          name: "On-Site Installation",
          items: [
            { name: "Latex", price: "$20 per foot (min 5ft)" },
            { name: "Chrome", price: "$25 per foot (min 5ft)" },
          ]
        },
        {
          name: "Grab and Go",
          items: [
            { name: "Latex - 4FT", price: "$60" },
            { name: "Chrome - 4FT", price: "$70" }
          ]
        }
      ]
    },
    {
      category: "Rentals",
      subcategories: [
        {
          name: "Backdrops",
          items: [
            { name: "2FT Arch Backdrop", price: "$15" },
            { name: "7FT Square Wall", price: "$50" },
            { name: "Circle White Backdrop", price: "$180" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="price-container">
      <h1 className="price-title">Price List</h1>
      {priceData.map((section, index) => (
        <div key={index} className="price-section">
          <h2 className="category-title">{section.category}</h2>
          {section.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="subcategory-section">
              <h3 className="subcategory-title">{subcategory.name}</h3>
              <ul className="price-list">
                {subcategory.hasDualPricing ? (
                  <>
                    <li className="price-header">
                      <span className="item-name"></span>
                      <div className="price-columns">
                        <span>Air-Filled</span>
                        <span>Helium</span>
                      </div>
                    </li>
                    {subcategory.items.map((item, i) => (
                      <li key={i} className="price-item">
                        <span className="item-name">{item.name}</span>
                        <div className="price-columns">
                          <span className="item-price">{item.air}</span>
                          <span className="item-price">{item.helium}</span>
                        </div>
                      </li>
                    ))}
                  </>
                ) : (
                  subcategory.items.map((item, i) => (
                    <li key={i} className="price-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PriceList;