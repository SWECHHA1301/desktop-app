import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div style={styles.card}>
      <div style={styles.title}>{title}</div>
      <div style={styles.value}>{value}</div>
    </div>
  );
};

const UpdateBoard = () => {
  const cards = [
    { title: "Today's Revenue", value: "₹20000" },
    { title: "Month's Revenue", value: "₹2000" },
    { title: "Today's Sales", value: "20" },
    { title: "Today's Products", value: "8" },
    { title: "Low Stock Items", value: "0" },
    { title: "Active Customers", value: "10" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <DashboardCard key={index} title={card.title} value={card.value} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#3658BF",
   padding:'16px 38px',
    fontFamily: "Arial, sans-serif",
      borderRadius :'10px',
            border:'1.5px solid black'
  },
  grid: {
    display: "grid",
   gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "42px",
    rowGap:'16px'
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: '10px',
    padding: "16px",
    // boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    textAlign: "Left",
    border:'1.5px solid black',
    height:'92px'
  },
  title: {
    fontSize: "16px",
    color: "#797979",
    // marginBottom: "8px",
    fontWeight: "700",
  },
  value: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#000",
  },
};

export default UpdateBoard;
