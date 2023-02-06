import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../components/Layout/NavigationBar";
import "./ContactUs.css";
import Footer from "../components/Layout/Footer";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    };
    try {
      await axios.post(
        "https://sharpener-d1685-default-rtdb.firebaseio.com/ecommerceform.json",
        obj
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavigationBar />
      <div className="form-div">
        <Form style={{ margin: "50px" }} onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={nameChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={emailChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoneNo">
            <Form.Label>Email Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={phoneChangeHandler}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
