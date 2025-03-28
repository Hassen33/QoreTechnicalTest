import styles from "./MembersStoriesSectionCard.module.css";

/**
 * memberStoriesCard Component
 * -------------------
 * + Renders an expandable memberStoriesCard using data from memberStoriesCardData.
 * @returns {JSX.Element} memberStoriesCard component.
 * @example <memberStoriesCard />
 */

// ====================
//      PropTypes
// ====================
interface memberStoriesCardItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}
const MemberStoriesCard = ({
  id,
  title,
  description,
  image,
}: memberStoriesCardItemProps) => {
  return (
    <>
      <div key={id} className={styles.memberStoriesCardContent}>
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.textContainer}>
          <h4 className={styles.contentTitle}>{title}</h4>
          <p className={styles.memberStoriesCardDescription}>{description}</p>
          <button className={styles.memberStoriesCardButton}>Read More</button>
        </div>
      </div>
    </>
  );
};

export default MemberStoriesCard;
