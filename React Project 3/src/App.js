import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import FormData from "./components/FormData/FormData";

const form = [
  {
    name: "Deepak",
    age: 25,
  },
];

function App() {
  const [formData, setFormData] = useState(form);
  const addFormData = (data) => {
    setFormData((prevData) => {
      return [data, ...prevData];
    });
  };
  return (
    <div>
      <Form onSaveData={addFormData} />
      <FormData data={formData} />
    </div>
  );
}

export default App;
