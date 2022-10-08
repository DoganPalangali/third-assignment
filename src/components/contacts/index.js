import { useState, useEffect } from "react";

import "./styles.css";

import Form from "./data";
import List from "./listing";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Kemal",
    },
    {
      fullname: "Doğan",
    },
    {
      fullname: "Mert",
    },
    {
      fullname: "Onur",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Friends</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
