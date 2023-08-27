const styles = {
  container: {
    border: "5px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "88vh",
  },
  largeImg: {
    border: "5px solid black",
    width: "100%",
    height: "60%",
    textAlign: "center",
  },
  smallImgContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "5px solid black",
    textAlign: "center",
    width: "100%",
    height: "40%",
  },
  smallImg: {},
};

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <div style={styles.largeImg}>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="src/assets/Linkedin.png" width={80} />
        </a>
      </div>
      <div style={styles.smallImgContainer}>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="src/assets/Linkedin.png" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="src/assets/Linkedin.png" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="src/assets/Linkedin.png" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="src/assets/Linkedin.png" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="src/assets/Linkedin.png" width={40} />
        </a>
      </div>
    </div>
  );
}
