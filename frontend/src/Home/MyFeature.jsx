import React from "react";

const Features = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Our Features</h2>
      <div style={styles.cardContainer}>
        {featuresData.map((feature, index) => (
          <div style={styles.card} key={index}>
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const featuresData = [
  {
    title: "Expert Guidance",
    description: "Learn from the best minds in the industry.",
  },
  {
    title: "Networking",
    description: "Connect with like-minded entrepreneurs.",
  },
  {
    title: "Resources",
    description: "Access tools and materials to grow your business.",
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
  cardTitle: {
    color: "#0d6efd",
    marginBottom: "10px",
  },
};

export default Features;
