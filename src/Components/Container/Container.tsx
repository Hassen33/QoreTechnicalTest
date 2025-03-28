import React from "react";
import styles from "./Container.module.css";

/**
 * Container Component
 * -------------------
 * A wrapper that provides consistent spacing, max-width, and central alignment.
 */

// ====================
//      PropTypes
// ====================
interface ContainerProps {
  children: React.ReactNode;
}

// Container component
const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
