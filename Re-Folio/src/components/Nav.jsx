import { Link } from "react-router-dom";
// import NavBar from "./UI/NavBar";
import "../styles/navLinks.css";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "end",
    alignItems: "center",
    backgroundColor: "#c3bef0",
    height: "4vh",
    width: "100%",
    textAlign: "center",
    borderRadius: "0 0 5px 5px",
    boxShadow: "0 5px 10px #cadefc",
  },

  items: {
    border: " 1px solid white",
    borderRadius: "50px ",
    padding: ".5%",
    fontSize: "1em",
    fontWeight: "500",
    textDecoration: "none",
    color: "white",
    margin: " 1%",
    ":hover": {
      color: " black",
    },
  },
};

export default function Nav() {
  return (
    <div style={styles.navbar}>
      {[
        <Link key={1} style={styles.items} className="links" to="/home">
          Home
        </Link>,
        <Link key={2} style={styles.items} className="links" to="/about">
          About Me
        </Link>,
        <Link key={3} style={styles.items} className="links" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} style={styles.items} className="links" to="/contact">
          Contact Me
        </Link>,
      ]}
    </div>
  );
}
