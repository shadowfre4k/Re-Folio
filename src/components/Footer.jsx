const styles = {
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "5%",

    position: "fixed",
    bottom: "0",

    backgroundColor: "#c3bef0",

    boxShadow: "0 -10px 20px #cadefc",
  },
  iconContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
};

export default function Footer() {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.iconContainer}>
        <a href="https://github.com/shadowfre4k">
          <img src="./src/assets/Github.png" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/vincent-jacobs-702471224/">
          <img src="./assets/Linkedin.png" width={40} />
        </a>
        <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobsearch--indeedmobile">
          <img src="assets/indeed.png" width={40} />
        </a>
      </div>
    </div>
  );
}
