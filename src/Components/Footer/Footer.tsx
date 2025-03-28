import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Container>
        {/* Footer Navigation & Social ICons */}
        <div className={styles.footerNavSocialContainer}>
          {/* Footer Nav */}
          <div className={styles.footerNavContainer}>
            {/* Footer Logo  */}
            <div className={styles.footerLogo}>
              <img src="./centralTexasFlyFishingWhiteLogo.svg" alt="Logo" />
            </div>

            {/* Footer Nav*/}
            <nav className={styles.footerNav}>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Footer Social Icons */}
          <div className={styles.footersocialIconsContainer}>
            <img
              className={styles.socialIcon}
              src="./facebookIcon.svg"
              alt="Logo"
            />
            <img
              className={styles.socialIcon}
              src="./instagramIcon.svg"
              alt="Logo"
            />
            <img
              className={styles.socialIcon}
              src="./linkedinIcon.svg"
              alt="Logo"
            />
          </div>
        </div>

        {/* Copyrights */}
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightsText}>© 2024 Central Texas Fly Fishing All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
