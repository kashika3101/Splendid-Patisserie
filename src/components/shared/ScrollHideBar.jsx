import React, { useState, useEffect } from "react";
import "./ScrollHideBar.css";

const menuData = {
  Cakes: {
    "Trending Cakes": [
      "Gourmet Cakes",
      "Bento Cakes",
      "Pull Me Up Cakes",
      "Pinata Cakes",
      "Drip Cakes",
    ],
    "By Type": [
      "Eggless Cakes",
      "Photo Cakes",
      "Cheese Cakes",
      "Half Cakes",
      "Heart Shaped Cakes",
    ],
    "By Flavours": [
      "Chocolate Cakes",
      "Vanilla Cakes",
      "Butterscotch Cakes",
      "Red Velvet Cakes",
      "Fruit Cakes",
    ],
  },
  Birthday: {
    "Popular Birthday Cakes": [
      "For Kids",
      "For Him",
      "For Her",
      "Photo Cakes",
      "Custom Designs",
    ],
  },
  Hampers: {
    "Gifting Hampers": ["Chocolate Hampers", "Dessert Hampers", "Combo Boxes"],
  },
};

const ScrollHideBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <div className={`scroll-hide-bar ${show ? "visible" : "hidden"}`}>
      <div className="menu">
        {Object.keys(menuData).map((menu) => (
          <div
            key={menu}
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(menu)}
            onMouseLeave={handleMouseLeave}
          >
            <button>{menu}</button>

            {activeMenu === menu && (
              <div className="dropdown">
                {Object.entries(menuData[menu]).map(([category, items]) => (
                  <div key={category} className="dropdown-column">
                    <h4>{category}</h4>
                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="menu-item-with-badge">
          <button>Hampers</button>
          <span className="new-badge">NEW</span>
        </div>
        <button>Anniversary</button>
        <button>Occasions</button>
        <button>Customized Cakes</button>
      </div>
    </div>
  );
};

export { ScrollHideBar };
