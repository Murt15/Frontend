import "./FormData.css";
const FormData = (props) => {
  return (
    <div className="data-div">
      {props.data.map((user) => (
        <div className="input-div">
          <label className="input-label">{`${user.name}     ( ${user.age} years old)`}</label>
          <br />
        </div>
      ))}
    </div>
  );
};
export default FormData;
