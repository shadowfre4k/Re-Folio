import PortfolioCard from "../components/UI/PortfolioCard";
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
          <img src="src/assets/viewfolio.png" width={1080} height={720} />
        </a>
      </div>
      <div style={styles.smallImgContainer}>
        <PortfolioCard
          title={"EmployeeSQL"}
          link={"https://github.com/shadowfre4k/EmployeeTrackerSQL"}
          img={"src/assets/employeeSQL.png"}
        />
        <PortfolioCard
          title={"Movie fight Club"}
          link={"https://github.com/shadowfre4k/Movie-Fight-Club"}
          img={"src/assets/movieFightClub.gif"}
        />
        <PortfolioCard
          title={"PWA TExt Editor"}
          link={"https://github.com/shadowfre4k/PWATextEditor"}
          img={"src/assets/pwa.png"}
        />
        <PortfolioCard
          title={"Noter Taker DB"}
          link={"https://github.com/shadowfre4k/noteTakerDB"}
          img={"src/assets/noteTaker.png"}
        />
        <PortfolioCard
          title={"eCommerceSQLize"}
          link={"https://github.com/shadowfre4k/eCommerceSQLize"}
          img={"src/assets/eCommerceSQLize.png"}
        />
      </div>
    </div>
  );
}

//links
