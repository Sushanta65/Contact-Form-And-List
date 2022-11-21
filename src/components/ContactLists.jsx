import React, { useState } from "react";

const ContactLists = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const handleSearchTermValue = (e) => {
    setSearchTerm(e.target.value);
  };
  let filteredContact = [];
  if (filter === "All") {
    filteredContact = contacts;
  } else {
    filteredContact = contacts.filter((contact) => contact.group === filter);
  }

  if (searchTerm) {
    filteredContact = filteredContact.filter(
      (contact) =>
        contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
    );
  }

  return (
    <div>
      <div>
        Filter:
        <input
          onChange={handleChange}
          defaultChecked
          value="All"
          name="filter"
          type="radio"
        />{" "}
        All
        <input
          onChange={handleChange}
          value=""
          name="filter"
          type="radio"
        />{" "}
        None
        <input
          onChange={handleChange}
          value="Home"
          name="filter"
          type="radio"
        />{" "}
        Home
        <input
          onChange={handleChange}
          value="Office"
          name="filter"
          type="radio"
        />{" "}
        Office
      </div>
      <div>
        <input
          value={searchTerm}
          onChange={handleSearchTermValue}
          type="search"
          placeholder="Search"
        />
      </div>
      {contacts.length > 0 && (
        <table border={2} cellPadding={2} cellSpacing={3}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            {filteredContact.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.group}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactLists;
