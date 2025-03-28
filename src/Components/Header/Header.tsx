import { useState } from "react";
import Container from "../Container/Container";
import styles from "./Header.module.css";
import { FiMenu, FiX } from "react-icons/fi";

/**
 * Header Component
 * ----------------
 * - Displays a responsive navigation bar.
 * - Desktop: Logo on the left, navigation on the right.
 * - Mobile: Logo on the left, hamburger menu toggles navigation.
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src="./centralTexasFlyFishing.svg" alt="Logo" />
            <span className={styles.logoText}>Central Texas Fly Fishing</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className={styles.mobileMenuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
