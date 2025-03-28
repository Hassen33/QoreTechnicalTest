import Container from "../Container/Container";
import styles from "./Contact.module.css";

/**
 * Contact Component
 * -----------------
 * A simple contact form with name, email, and message fields.
 *
 * @returns {JSX.Element} Contact form component.
 */

const Contact = () => {
  return (
    <div className={styles.ContactSectionContainer}>
      {/* Heading */}

      <Container>
        <h2 className={styles.heading}>Contact Us</h2>

        {/* Contact Form */}
        <div className={styles.contactContainer}>
          <form className={styles.form}>
            {/* Name Field */}
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
