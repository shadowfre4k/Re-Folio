import PortfolioCard from "../components/UI/PortfolioCard";
import employee from "../assets/employeeSQL.png";
import fight from "../assets/movieFightClub.gif";
import pokemon from "../assets/pokemon.png";
import note from "../assets/noteTaker.png";
import eCommerce from "../assets/eCommerceSQLize.png";
import viewfolio from "../assets/viewfolio.png";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "88vh",
  },
  title: {
    textDecoration: "none",
    fontSize: "2.5em",
    color: "#cca8e9",
    textShadow: "1px 1px 10px #cca8e9",
  },
  largeImg: {
    margin: "2%",
    textAlign: "center",
    boxShadow: "0px 10px 20px #c3bef0",
  },
  smallImgContainer: {
    backgroundColor: "#defcf9",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
};

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <div style={styles.largeImg}>
        <a style={styles.title} href="https://github.com/shadowfre4k/viewFolio">
          <div>Viewfolio</div>
          <img src={viewfolio} width={1080} height={720} />
        </a>
      </div>
      <div style={styles.smallImgContainer}>
        <PortfolioCard
          title={"EmployeeSQL"}
          link={"https://github.com/shadowfre4k/EmployeeTrackerSQL"}
          img={employee}
        />
        <PortfolioCard
          title={"Movie fight Club"}
          link={"https://github.com/shadowfre4k/Movie-Fight-Club"}
          img={fight}
        />
        <PortfolioCard
          title={"Pokemon Card Shop"}
          link={"https://scorsteezy-a5a23fdb1369.herokuapp.com/"}
          img={pokemon}
        />
        <PortfolioCard
          title={"Noter Taker DB"}
          link={"https://github.com/shadowfre4k/noteTakerDB"}
          img={note}
        />
        <PortfolioCard
          title={"eCommerceSQLize"}
          link={"https://github.com/shadowfre4k/eCommerceSQLize"}
          img={eCommerce}
        />
      </div>
    </div>
  );
}
