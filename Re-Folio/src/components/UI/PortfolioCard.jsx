const styles = {
  card: {
    boxShadow: "0px 10px 20px #cadefc",
    margin: "0% 0 2% 0",
    textAlign: "center",
  },
  title: {
    textDecoration: "none",
    fontSize: "1.5em",
    color: "#cca8e9",
    textShadow: "1px 1px 5px #c3bef0",
  },
};
export default function PortfolioCard(props) {
  return (
    <div style={styles.card}>
      <a style={styles.title} href={props.link}>
        <div>{props.title}</div>
        <img src={props.img} width={360} />
      </a>
    </div>
  );
}
