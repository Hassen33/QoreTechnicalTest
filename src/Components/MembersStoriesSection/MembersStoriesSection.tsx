import Container from "../Container/Container";
import MemberStoriesCard from "./MembersSectionCard/MembersStoriesSectionCard";
import styles from "./MembersStoriesSection.module.css";
import { MemberstoriesCardData } from "../../Data/memberStoriesCardData";
import MemberStoriesCardMobile from "./MemberStoriesSectionCardMobile/MemberStoriesSectionCardMobile";
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
        <h2 className={styles.memberStoriesTitle}>Member stories</h2>

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

          {/* Cards For Mobile Devices  */}
          {MemberstoriesCardData.map((item) => (
            <MemberStoriesCardMobile
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MembersStoriesSection;
