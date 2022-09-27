import { useCallback } from "react";
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import "../styles.css";

export const ListView = ({ contactList, sortContact, sort }) => {
  const handleSortOrder = useCallback(
    (e) => {
      sortContact && sortContact(e.target.dataset.field);
    },
    [sortContact]
  );

  return (
    <div>
      <h1 className="text-3xl font-bold underline" id="list-id">
        Contact List
      </h1>
      <Link aria-label="add" to="/add">
        Add
      </Link>
      {contactList?.length > 0 && (
        <ul role="table" aria-label="Contact List" aria-describedby="list-id">
          <li role="rowheader">
            <span role="cell" data-field="name" onClick={handleSortOrder}>
              Name
              {sort.field === "name" && sort.order === "asc" && <FaAngleDown />}
              {sort.field === "name" && sort.order === "desc" && <FaAngleUp />}
            </span>
            <span role="cell" data-field="email" onClick={handleSortOrder}>
              Email
              {sort.field === "email" && sort.order === "asc" && (
                <FaAngleDown />
              )}
              {sort.field === "email" && sort.order === "desc" && <FaAngleUp />}
            </span>
          </li>
          {contactList.map((contact, index) => (
            <li key={`contact-${index}`} role="rowgroup">
              <span role="cell">{contact.name}</span>
              <span role="cell">{contact.email}</span>
            </li>
          ))}
        </ul>
      )}

      {contactList.length === 0 && (
        <div>No Contact information in the system.</div>
      )}
    </div>
  );
};

export default ListView;
