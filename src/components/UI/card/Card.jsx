import profile from "../../../assets/profile.jpg";

const styles = {
  header: {
    backgroundColor: "#defcf9",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: ".5% 0",
  },
  body: {
    backgroundColor: "#defcf9",
    width: "70%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "5%",
    margin: ".5% 0",
    textShadow: "1px 1px 2px #cca8e9",
    fontSize: "2.5em",
  },
  img: {
    border: "5px solid #cadefc",
    borderRadius: "50%",
    boxShadow: "0px -10px 20px #cadefc",
    width: "50%",
  },
};

export default function Card() {
  return (
    <>
      <div style={styles.header}>
        <img style={styles.img} src={profile} />
      </div>
      <div style={styles.body}>
        <div>
          {`Hello My Name is Vincent Jacobs!
        I aspire to be known for my craft in webdevelopment. I pride myself on the work I've done up until now and look forward to the types of things i will be creating in the future!
        
        My plans is to jump into the field as a fullstack developer to take on new challenges and become more knowledgable in all avenues. Having worked with many technologies and applications, I've only learned that anything is possible to learn and whatever you need, I can bring!`}
        </div>
      </div>
    </>
  );
}
