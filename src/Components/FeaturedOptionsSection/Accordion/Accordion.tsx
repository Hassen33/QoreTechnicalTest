import { useState } from "react";
import styles from "./Accordion.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
/**
 * Accordion Component
 * -------------------
 * + Renders an expandable accordion using data from featuredOptionsData.
 * @returns {JSX.Element} Accordion component.
 * @example <Accordion />
 */

// ====================
//      PropTypes
// ====================
interface AccordionItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  index: any;
}
const Accordion = ({
  id,
  title,
  description,
  image,
  index,
}: AccordionItemProps) => {
  /* ++++++++++ States ++++++++++ */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ++++++++++ Handlers ++++++++++ */
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div key={id} className={styles.accordionItem}>
        {/*
        ================
        Accordion Header 
        ================
        */}
        <div
          className={styles.accordionHeader}
          onClick={() => handleToggle(index)}
        >
          <h3>{title}</h3>
          <MdKeyboardArrowDown
            size={24}
            className={`${styles.icon} ${
              activeIndex === index ? styles.rotate : ""
            }`}
          />
        </div>

        {/*
              =================
              Accordion Content 
              =================
              */}
        {activeIndex === index && (
          <div className={styles.accordionContent}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.textContainer}>
              <h4 className={styles.contentTitle}>{title}</h4>
              <p className={styles.accordionDescription}>{description}</p>
              <button className={styles.accordionButton}>Learn More</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
