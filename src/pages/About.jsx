import Card from "../components/UI/card/Card";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "88vh",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",

    width: "100%",
    height: "100%",
  },
};

export default function About() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.card}>
          <Card />
        </div>
      </div>
    </>
  );
}
