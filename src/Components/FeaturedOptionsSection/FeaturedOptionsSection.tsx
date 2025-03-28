import Container from "../Container/Container";
import Accordion from "./Accordion/Accordion";
import { accordionData } from "./accordionData";
import Card from "./Card/Card";
import styles from "./FeaturedOptionsSection.module.css";
/**
 * Featured options Component
 * --------------------------
 * Contains Multiple Accordions Each Accordion Contain image, Text & a Button ..
 */

const FeaturedOptionsSection = () => {
  return (
    <div className={styles.featuredOptionSectionContainer}>
      <Container>
        {/* Title */}
        <h2 className={styles.featuredOptionTitle}>Featured options</h2>

        {/* Accordions For Desktop*/}
        <Accordion />

        {/* Cards For Mobile Devices  */}
        {accordionData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </Container>
    </div>
  );
};

export default FeaturedOptionsSection;
