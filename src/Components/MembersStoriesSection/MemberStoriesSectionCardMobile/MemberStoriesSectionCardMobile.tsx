import styles from "./MemberStoriesSectionCardMobile.module.css";
/**
 * member Stories Card Mobile Component
 * ------------------------------------
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
const MemberStoriesCardMobile = ({
  id,
  title,
  description,
  image,
}: memberStoriesCardItemProps) => {
  return (
    <>
      <div key={id} className={styles.memberStoriesCardContent}>
        {/* Title */}
        <h4 className={styles.mobileCardTitle}>{title}</h4>

        {/* Image + text  */}
        <div className={styles.textImageContainer}>
          <img src={image} alt={title} className={styles.image} />
          <p className={styles.memberStoriesCardDescription}>{description}</p>
        </div>

        {/* Button */}
        <button className={styles.memberStoriesCardButton}>Read More</button>
      </div>
    </>
  );
};

export default MemberStoriesCardMobile;
