import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/design", label: "Design" },
  { to: "/strategy", label: "Strategy" },
  { to: "/about", label: "About" },
  { to: "/why", label: "Why work with us?" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Ollie
        </Link>
        <nav className="nav">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} activeClassName="active" exact>
                {label}
              </NavLink>
            </li>
          ))}
        </nav>
        <div className="contact">
          <Link to="/contact" onClick={closeMenu}>
            Let's work together
          </Link>
        </div>
        <button
          type="button"
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} activeClassName="active" exact onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
