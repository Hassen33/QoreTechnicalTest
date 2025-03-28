import Container from "../Container/Container";
import Accordion from "./Accordion/Accordion";
import Card from "./Card/Card";
import { featuredOptionsData } from "./featuredOptionsData";
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
        {featuredOptionsData.map((item, index) => (
          <Accordion
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            index={index}
          />
        ))}

        {/* Cards For Mobile Devices  */}
        {featuredOptionsData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            bgImage={item.bgImage}
          />
        ))}
      </Container>
    </div>
  );
};

export default FeaturedOptionsSection;
