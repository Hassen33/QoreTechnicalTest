import styles from "./Card.module.css";

/**
 * Card Component
 * --------------
 * + Displays a title, description, and a "Learn More" button.
 */

// ====================
//      PropTypes
// ====================
interface CardProps {
  title: string;
  description: string;
  link: string;
  bgImage: string;
}

// Card component
const Card = ({ title, description, link, bgImage }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.button}>
        Learn More
      </a>
    </div>
  );
};

export default Card;
