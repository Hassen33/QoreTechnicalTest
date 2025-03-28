import Container from "../Container/Container";
import MemberStoriesCard from "./MembersSectionCard/MembersStoriesSectionCard";
import styles from "./MembersStoriesSection.module.css";
import { MemberstoriesCardData } from "./memberStoriesCardData";
// import { MemberstoriesCardData } from "./MemberstoriesCardData";

/**
 * MembersStories Component
 * ------------------------
 * Contains Multiple Member Cards Each Card Contain image, Text & a Button ..
 */

const MembersStoriesSection = () => {
  return (
    <section className={styles.memberStoriesSectionContainer}>
      <Container>
        {/* Title */}
        <h2 className={styles.memberStoriesTitle}>Featured options</h2>

        {/* Accordions For Desktop*/}
        <div className={styles.cardsContainer}>
          {MemberstoriesCardData.map((item) => (
            <MemberStoriesCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

        {/* Cards For Mobile Devices  */}
        {/* {MemberstoriesCardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))} */}
      </Container>
    </section>
  );
};

export default MembersStoriesSection;
