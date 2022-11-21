import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactLists from "./components/ContactLists";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([].concat(contact, contacts));
    console.log(contacts);
  };
  return (
    <div>
      <ContactForm getContact={getContact} />
      <ContactLists contacts={contacts} />
    </div>
  );
};

export default App;
