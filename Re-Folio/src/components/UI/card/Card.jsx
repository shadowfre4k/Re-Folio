const styles = {
  header: {
    border: " 1px solid black",
    padding: "5vh",
  },
  body: {
    border: " 1px solid black",

    height: "48vh",
  },
};

export default function Card() {
  return (
    <>
      <div style={styles.header}>header</div>
      <div style={styles.body}>Body</div>
    </>
  );
}
