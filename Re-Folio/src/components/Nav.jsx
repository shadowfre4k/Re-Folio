import { Link } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c3bef0",
    height: "2%",
    width: "100%",
    textAlign: "center",
    borderRadius: "0 0 5px 5px",
    boxShadow: "0 10px 20px #cadefc",
    padding: ".5%",
  },
  itemContainer: {
    display: "flex",
    flexWrap: "nowrap",
    width: "50%",
  },
  items: {
    backgroundColor: "#c3bef0",
    border: " 2px solid white",
    borderRadius: "50px ",
    padding: " .5% 2%",
    fontSize: "1em",
    fontWeight: "1000",
    textDecoration: "none",
    color: "white",
    margin: " 0% 5%",
  },
  name: {
    backgroundColor: "#c3bef0",
    fontSize: "3em",
    fontWeight: "1000",
    textDecoration: "none",
    color: "white",
    margin: " 0% 1%",
    textShadow: "1px 1px 10px #cadefc",
  },
};

export default function Nav() {
  return (
    <div>
      <div style={styles.navbar}>
        <div style={styles.name}>Vincent Jacobs</div>
        <div style={styles.itemContainer}>
          {[
            <Link key={1} style={styles.items} to="/">
              About Me
            </Link>,
            <Link key={2} style={styles.items} to="/portfolio">
              Portfolio
            </Link>,
            <Link key={3} style={styles.items} to="/resume">
              Resume
            </Link>,
            <Link key={4} style={styles.items} to="/contact">
              Contact Me
            </Link>,
          ]}
        </div>
      </div>
    </div>
  );
}
