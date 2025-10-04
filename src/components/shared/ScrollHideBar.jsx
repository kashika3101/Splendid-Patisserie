import React, { useEffect, useState } from "react";
import "./ScrollHideBar.css";

const ScrollHideBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down -> hide instantly
      setShow(false);
    } else {
      // Scrolling up -> show instantly
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div className={`scroll-hide-bar ${show ? "visible" : "hidden"}`}>
      <div className="menu">
        <button>Cakes</button>
        <button>Theme Cakes</button>
        <button>By Relationship</button>
        <button>Desserts</button>
        <button>Birthday</button>
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
