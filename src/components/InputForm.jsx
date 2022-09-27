import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const InputForm = ({ addContact }) => {
  let navigate = useNavigate();
  let nameFieldRef = useRef();
  let emailFieldRef = useRef();

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      addContact &&
        addContact({
          name: nameFieldRef.current.value,
          email: emailFieldRef.current.value
        });

      navigate("/");
    },
    [navigate, addContact]
  );

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name
        <input ref={nameFieldRef} type="text" name="name" required />
      </label>
      <label>
        Email
        <input ref={emailFieldRef} type="email" name="email" required />
      </label>

      <input type="submit" value="Add" aria-label="Add" />
    </form>
  );
};

export default InputForm;
