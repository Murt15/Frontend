import { useState, useRef } from "react";
import Notification from "../Notification/Notification";
import "./Form.css";
const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  const enteredUserName = nameInputRef.current.value;
  const enteredUserAge = ageInputRef.current.value;
  const collegeInput = collegeInputRef.current.value;

  const [error, setError] = useState();

  const submitFormHandler = (event) => {
    event.preventDefault();
    //console.log(enteredName.length);
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({ msg: "Please Enter Valid Age and Name" });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ msg: "Enter Valid Age >0" });
      return;
    }
    const userData = {
      name: enteredUserName,
      age: enteredUserAge,
      college: collegeInput,
    };

    props.onSaveData(userData);
    nameInputRef.current.value = " ";
    ageInputRef.current.value = " ";
    collegeInputRef.current.value = " ";
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
            <input className="form-input" type="text" ref={nameInputRef} />
            <br />
            <label className="form-label">Age</label>
            <br />
            <input className="form-input" type="number" ref={ageInputRef} />
            <br />
            <label className="form-label">College Name</label>
            <br />
            <input className="form-input" type="text" ref={collegeInputRef} />
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
