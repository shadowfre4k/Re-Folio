import { useState } from "react";
import { validateEmail } from "../util/helpers";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    padding: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  childContainer: {
    boxShadow: "0px 10px 20px #cadefc",
    textShadow: "1px 1px 1px #cca8e9",
    borderRadius: " 50px",
    backgroundColor: "#defcf9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "2% 10%",
  },

  form: {
    margin: "8%",
    borderRadius: " 50px",
    textAlign: "center",
  },
  bigform: {
    borderRadius: " 50px",
    textAlign: "center",
    width: "500px",
    height: "300px",
  },
};
export default function Contact() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "userName") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");

      return;
    }

    alert(`Thank you! ${userName}, Message has been sent!`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <form style={styles.childContainer} onSubmit={handleFormSubmit}>
        <h1>Please fill out form to Contact</h1>
        <input
          style={styles.form}
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="userName"
          placeholder="userName"
        />
        <input
          style={styles.form}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          style={styles.bigform}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button style={styles.form} type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
