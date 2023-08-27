const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "88vh",
  },
  button: {
    boxShadow: "0px 10px 20px #cadefc",
    textShadow: "1px 1px 1px #cca8e9",
    borderRadius: " 50px",
    backgroundColor: "#defcf9",
    border: "1px solid #defcf9",
    Color: "#defcf9",
    display: "flex",
    justifyContent: "center",
    margin: "5%",
    padding: "1%",
  },
  list: {
    boxShadow: "0px 10px 20px #cadefc",
    textShadow: "1px 1px 1px #cca8e9",
    borderRadius: " 50px",
    backgroundColor: "#defcf9",
    padding: "1%",
  },
};
const downloadResume = () => {
  const btn = document.createElement("a");
  btn.download = "Resume";
  btn.href = "src/assets/Resume.pdf";
  btn.click();
  console.log("hello");
};

export default function Resume() {
  return (
    <div style={styles.container}>
      <div style={styles.button}>
        <div onClick={downloadResume}>Download Resume</div>
      </div>
      <div style={styles.list}>
        <h1>Skills and Technologies</h1>
        <ul>
          <li>Javascript ES6 SQL NoSQL CSS HTML Python GIT</li>
          <li>Handlebars REACTjs Bootstrap BlazeUI</li>
          <li>MongoDB MySQL Sequelize expressJS DynamoDB AWS NodeJS Axios </li>
          <li>Heroku Netlify JEST Postman Insomnia</li>
          <li>
            Object Oriented Programing, Object Relational Mapping, Model View
            Controllers RESTAPIs Progressive Web Apps Routing APIs Web APIs
            Server APIs
          </li>
        </ul>
      </div>
    </div>
  );
}
