import Card from "../components/UI/card/Card";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90vh",
  },
  child: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    border: " 1px solid black",
    textAlign: "center",
    width: "50%",
    height: "60%",
  },
  card: {
    width: "100%",
  },
};

export default function Homepage() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.child}>
          <div style={styles.card}>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
