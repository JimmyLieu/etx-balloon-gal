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
      category: "INDIVIDUAL CHART",
      subcategories: [
        {
          name: "LATEX",
          hasDualPricing: true,
          items: [
            { name: "12 IN SINGLE", balloon: "$1.00", helium: "$2.99" },
            { name: "18 IN SINGLE", air: "$1.50", helium: "$4.50" },
            { name: "36 IN SINGLE", air: "$8.25", helium: "$8.97" },
            
          ]
        },
        {
          name: "MAYLAR",
          hasDualPricing: true,
          items: [
            { name: "18 IN SINGLE", air: "$12.00", helium: "$4.99" },
            { name: "18 IN SINGLE", air: "$14.00", helium: "$7.50" },
            { name: "36 IN SINGLE", air: "$16.00", helium: "$9.98" },
            { name: "36 IN SINGLE", air: "$18.00", helium: "$11.64" }
          ]
        },
        {
          name: "BUBBLE BALLOON",
          
          items: [
            { name: "5 IN CLEAR", balloon: "$3.00",air: "$2.00", helium: "" },
            { name: "5 IN CONFETTI", balloon: "$9.00",air: "$2.00", helium: "" },
            { name: "18 IN CLEAR", balloon: "$4.50",air: "$2.00", helium: "$4.99" },
            { name: "18 IN CONFETTI", balloon: "$10.50",air: "$2.00", helium: "$4.99" },
            { name: "24 IN CLEAR", balloon: "$8.25",air: "$2.00", helium: "$6.65" },
            { name: "24 IN CONFETTI", balloon: "$13.50",air: "$2.00", helium: "$6.65" },
            { name: "36 IN CLEAR", balloon: "$11.97",air: "$2.00", helium: "$9.98" },
            { name: "36 IN CONFETTI", balloon: "$17.97",air: "$2.00", helium: "$9.98" },

          ]
        }
      ]
    },
    {
      category: "RENTALS",
      subcategories: [
        {
          name: "BACKDROPS / WALLS",
          items: [
            { name: "2FT ARCH BACKDROP", price: "$15" },
            { name: "SQUARE BACKDROP (6 1/2 FT TALL)", price: "$50" },
            { name: "7FT SQUARE WALL", price: "$50" },
            { name: "8FT SQUARE WALL", price: "$50" },
            { name: "WHITE OPEN ARCH BACKDROP", price: "$50" },
            { name: "WHITE ARCH BACKDROP", price: "$50" },
            { name: "HALF ARCH BACKDROP (DIFFERENT SIZES)", price: "$40 EACH" },
            { name: "WOOD RAINBOW BACKDROP", price: "$60" },
            { name: "STAINED WOODEN WALL", price: "$150" },
            { name: "CIRCLE WHITE BACKDROP", price: "$180" },
            { name: "FAUX LEAF WALL", price: "$200" },
            { name: "SHIMMER WALLS (7FT X 7FT)(BLACK, GOLD, FUSCIA)", price: "$200" },
          ]
        },
        {
          name: "TABLES / PROPS",
          items: [
            { name: "GOLD STANDS", price: "$10 EACH" },
            { name: "WORLD GLOBE DESK PROP", price: "$10" },
            { name: "STUFFED ANIMALS", price: "$15" },
            { name: "VINTAGE SUITCASES (2)", price: "$40" },
            { name: "AIRPLANE TABLE", price: "$180" },
            { name: "THE \"ONE\" TABLE", price: "$180" },

          ]
        },
        {
          name: "BLOCKS / RING STANDS",
          items: [
            { name: "SQUARE CUBE BLOCK RENTALS (3) ", price: "$25 EACH" },
            { name: "WOOD BABY BLOCKS (RENT AS A SET)", price: "$75" },
            { name: "GOLD PENTAGON RING", price: "$75" },
            { name: "GOLD CIRCLE RING", price: "$100" },

          ]
        },
        {
          name: "MARQUEE / SIGNS",
          items: [
            { name: "CACTUS MARQUEE", price: "$65" },
            { name: "MARQUEE NUMBERS & LETTERS (4 FT TALL)", price: "$65 EACH" },
            { name: "NEON SIGNS (HAPPY BIRTHDAY, MI BAUTIZO, LET'S PARTY, CONGRATS GRAD)", price: "$65 EACH" },
            { name: "GOLD CIRCLE RING", price: "$100" },

          ]
        },
        {
          name: "EXTRA",
          items: [
            { name: "BIG PINK BOW", price: "$65" },
            { name: "BARBIE BOX", price: "$200" },
            { name: "SMALL CASTLE BOUNCE HOUSE WITHOUT BALLOONS ", price: "$200" },
            { name: "SMALL CASTLE BOUNCE HOUSE WITH BALLOONS", price: "$300" },

          ]
        },
        
      ]
    },
    {
      category: "ADDITIONAL CHARGES",
      subcategories: [
        {
          name: "DELIVERY CHARGES",
          items: [
            { name: "Per Mile (from shop to destination)", price: "$3.00" },
            { name: "Minimum Distance", price: "5 miles" }
          ]
        },
        {
          name: "INSTALLATION ON-SITE",
          items: [
            { name: "Installation Fee (per person)", price: "20% of (Decoration + Delivery)" },
            { name: "Minimum Decoration Value Required", price: "$250" }
          ]
        },
        {
          name: "RUSH FEES",
          items: [
            { name: "Within 48 Hours", price: "$45" },
            { name: "Within 24 Hours", price: "$65" },
            { name: "Within 12 Hours", price: "$85" },
            { name: "Within 6 Hours", price: "$105" }
          ]
        },
        {
          name: "CLEAN UP/TEAR DOWN",
          items: [
            { name: "After 9 PM Fee", price: "$60" }
          ]
        }
      ]
    },
    {
      category: "ADD ONS",
      subcategories: [
        {
          name: "DECAL VINYL",
          items: [
            { name: "Any Color & Number of Letters", price: "$20" }
          ]
        },
        {
          name: "TASSELS",
          items: [
            { name: "Individual Tassel", price: "$2.50" },
            { name: "String (per roll)", price: "$3.00" },
            { name: "Tassel Bundle (up to 4 colors per balloon)", price: "$15" }
          ]
        },
        {
          name: "BALLOON WEIGHTS",
          items: [
            { name: "Chrome Weight", price: "$2" },
            { name: "6 PC Balloon Weight", price: "$10" }
          ]
        },
        {
          name: "STARS",
          items: [
            { name: "26 IN", price: "$12" },
            { name: "40 IN", price: "$18" }
          ]
        },
        {
          name: "EXTRA",
          items: [
            { name: "Glitter Inside Balloon", price: "$5" },
            { name: "Balloon Shine", price: "$10" },
            { name: "Balloon Gel", price: "$0.50" }
          ]
        }
      ]
    },
    {
      category: "GARLANDS",
      subcategories: [
        {
          name: "ON-SITE (LATEX)",
          items: [
            { name: "Per Foot of Garland (minimum 5ft)", price: "$20" }
          ]
        },
        {
          name: "ON-SITE (CHROME)",
          items: [
            { name: "Per Foot of Garland (minimum 5ft)", price: "$25" }
          ]
        },
        {
          name: "GRAB AND GO (LATEX)",
          items: [
            { name: "4FT", price: "$60" },
            { name: "6FT", price: "$120" },
            { name: "8FT", price: "$160" },
            { name: "10FT (Large Vehicle Required)", price: "$200" },
            { name: "12FT (Large Vehicle Required)", price: "$240" }
          ]
        },
        {
          name: "GRAB AND GO (CHROME)",
          items: [
            { name: "4FT", price: "$70" },
            { name: "6FT", price: "$130" },
            { name: "8FT", price: "$170" },
            { name: "10FT (Large Vehicle Required)", price: "$210" },
            { name: "12FT (Large Vehicle Required)", price: "$250" }
          ]
        }
      ]
    },
    {
      category: "ARCHES",
      subcategories: [
        {
          name: "BALLOON ARCH",
          items: [
            { name: "Maximum of 4 Colors", price: "$600" }
          ]
        }
      ]
    },
    {
      category: "GIFT WRAPPING",
      subcategories: [
        {
          name: "SIZES",
          items: [
            { name: "Small", price: "$10.00" },
            { name: "Medium", price: "$17.00" },
            { name: "Large", price: "$28.00" },
            { name: "XL and Up", price: "$35.00" }
          ]
        }
      ]
    },
    {
      category: "BUNDLES",
      subcategories: [
        {
          name: "JUMBO BALLOON PACKAGE",
          items: [
            { name: "Includes: Tassel Bundle, Balloon Weight, 36 IN Balloon, and Decal Vinyl", price: "Starting at $95" }
          ]
        },
        {
          name: "BASIC PARTY PACKAGE",
          items: [
            { name: "Includes: (1) Large Wall Panel & (2) Small Wall Panels (2) 6FT Balloon Garlands", price: "$450" }
          ]
        },
        {
          name: "STANDARD PARTY PACKAGE",
          items: [
            { name: "Includes: (2) Large Wall Panels (2) Pedestals, Decal Vinyl on One Wall Panel, and a 10FT Balloon Garland", price: "$750" }
          ]
        },
        {
          name: "EXTRAVAGANT PARTY PACKAGE",
          items: [
            { name: "Includes: Any Backdrop Rental up to (3), 16FT Balloon Garland, Custom Sign, and 3 Pedestals", price: "$1,200" },
            { name: "Note: The Greenery Wall is by itself and any additional wall is an additional cost", price: "" }
          ]
        }
      ]
    },
    {
      category: "CUSTOMIZATIONS & EXTRAS",
      subcategories: [
        {
          name: "CUSTOMIZATIONS",
          items: [
            { name: "Price varies based upon customers wants, inventory, and ability", price: "Varies" }
          ]
        },
        {
          name: "EXTRA ADD-ONS",
          items: [
            { name: "Extra add-ons not listed may vary on price depending on inventory", price: "Varies" }
          ]
        }
      ]
    }
  ];

  const getPricingType = (subcategory) => {
    if (!subcategory.items || subcategory.items.length === 0) return 'single';
    const firstItem = subcategory.items[0];
    
    // Check if item has all three price types
    if (firstItem.balloon && firstItem.air && firstItem.helium !== undefined) {
      return 'triple';
    }
    
    // Check for dual pricing
    if (firstItem.air && firstItem.helium !== undefined) {
      return 'dual';
    }
    
    // Check for single pricing
    if (firstItem.price) {
      return 'single';
    }
    
    return 'dual';
  };

  return (
    <div className="price-container">
      <h1 className="price-title">PRICE LIST</h1>
      {priceData.map((section, index) => (
        <div key={index} className="price-section">
          <h2 className="category-title">{section.category}</h2>
          {section.subcategories.map((subcategory, subIndex) => {
            const pricingType = getPricingType(subcategory);
            return (
              <div key={subIndex} className="subcategory-section">
                <h3 className="subcategory-title">{subcategory.name}</h3>
                <ul className="price-list">
                  {pricingType === 'single' ? (
                    subcategory.items.map((item, i) => (
                      <li key={i} className="price-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">{item.price}</span>
                      </li>
                    ))
                  ) : pricingType === 'triple' ? (
                    <>
                      <li className="price-header">
                        <span className="item-name"></span>
                        <div className="price-columns">
                          <span>Balloon</span>
                          <span>Air</span>
                          <span>Helium</span>
                        </div>
                      </li>
                      {subcategory.items.map((item, i) => (
                        <li key={i} className="price-item">
                          <span className="item-name">{item.name}</span>
                          <div className="price-columns">
                            <span className="item-price">{item.balloon || '-'}</span>
                            <span className="item-price">{item.air || '-'}</span>
                            <span className="item-price">{item.helium === '' ? '-' : item.helium || '-'}</span>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      <li className="price-header">
                        <span className="item-name"></span>
                        <div className="price-columns">
                          <span>Air</span>
                          <span>Helium</span>
                        </div>
                      </li>
                      {subcategory.items.map((item, i) => (
                        <li key={i} className="price-item">
                          <span className="item-name">{item.name}</span>
                          <div className="price-columns">
                            <span className="item-price">{item.air || '-'}</span>
                            <span className="item-price">{item.helium === '' ? '-' : item.helium || '-'}</span>
                          </div>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PriceList;
               