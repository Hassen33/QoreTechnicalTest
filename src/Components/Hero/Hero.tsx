import styles from "./Hero.module.css";

/**
 * Hero Component
 * ---------------
 * - Displays a large heading, description, button, and image.
 * - Uses flexbox for layout.
 *
 * @returns {JSX.Element} Hero section.
 */

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroContainer}>
        {/*
        ============
        Hero Content
        ============
        */}
        <div className={styles.content}>
          <h1>
            Central Texas
            <br />
            Fly Fishing
          </h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <button className={styles.button}>Get started</button>
        </div>
        {/*
        ==========
        Hero Image 
        ==========
        */}
        <div className={styles.imageWrapper}>
          <img
            src="./heroSectionImage.png"
            alt="Fishing in a lake"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
