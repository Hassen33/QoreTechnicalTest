import { useState } from "react";
import styles from "./Accordion.module.css";
import { accordionData } from "../accordionData";
import { MdKeyboardArrowDown } from "react-icons/md";
/**
 * Accordion Component
 * -------------------
 * + Renders an expandable accordion using data from accordionData.
 * @returns {JSX.Element} Accordion component.
 * @example <Accordion />
 */

const Accordion = () => {
  /* ++++++++++ States ++++++++++ */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ++++++++++ Handlers ++++++++++ */
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {accordionData.map((item, index) => (
        <div key={item.id} className={styles.accordionItem}>
          {/*
        ================
        Accordion Header 
        ================
        */}
          <div
            className={styles.accordionHeader}
            onClick={() => handleToggle(index)}
          >
            <h3>{item.title}</h3>
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
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.textContainer}>
                <h4>{item.title}</h4>
                <p className="accordionDescription">{item.description}</p>
                <button className={styles.accordionButton}>Learn More</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
