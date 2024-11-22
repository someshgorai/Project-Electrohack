import React from "react";

const Testimonials = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>What People Are Saying</h2>
      <div style={styles.cardContainer}>
        {testimonialsData.map((testimonial, index) => (
          <div style={styles.card} key={index}>
            <p style={styles.testimonialText}>{testimonial.quote}</p>
            <span>{testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const testimonialsData = [
  {
    quote: "Entrepreneurial Edge has transformed how I approach my business ideas.",
    author: "- Sarah K.",
  },
  {
    quote: "A fantastic platform for anyone looking to start or grow a business!",
    author: "- John D.",
  },
];

const styles = {
  section: {
    padding: "40px 20px",
    textAlign: "center",
  },
  sectionTitle: {
    marginBottom: "20px",
    color: "#333",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "300px",
  },
  testimonialText: {
    fontStyle: "italic",
    marginBottom: "10px",
  },
};

export default Testimonials;
