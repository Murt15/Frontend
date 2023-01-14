import { useState } from "react";
import Notification from "../Notification/Notification";
import "./Form.css";
const Form = (props) => {
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const [error, setError] = useState();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredName.length);
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ msg: "Please Enter Valid Age and Name" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ msg: "Enter Valid Age >0" });
      return;
    }
    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    props.onSaveData(userData);
    setEnteredAge(" ");
    setEnteredName(" ");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <Notification msg={error.msg} onConfirm={errorHandler} />}
      {/* <Notification msg={"Error"} /> */}
      <div className="user-form">
        <fieldset>
          <form onSubmit={submitFormHandler}>
            <label className="form-label">Username</label>
            <br />
            <input
              className="form-input"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
            <br />
            <label className="form-label">Age</label>
            <br />
            <input
              className="form-input"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
            <br />
            <button type="Submit" className="submit-btn">
              Add User
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
};
export default Form;
