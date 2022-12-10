import "./All.css";
import { useEffect, useState } from "react";

const LiComponent = ({ element }) => {
  return (
    <div className="component">
      <div>
        <input type={"checkbox"}></input>
      </div>
      <div className="element">{element}</div>
    </div>
  );
};

const All = () => {
  const [items, setItems] = useState([
    "Do coding challenges",
    "Do coding challenges",
    "Do coding challenges",
  ]);
  useEffect(() => {
    const PARSEdata = JSON.parse(localStorage.getItem("data"));
    setItems(PARSEdata);
  }, [items]);
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleAdd = () => {
    if (input === "") {
      alert("You must add something!");
    } else {
      setItems([...items, input]);
      const JSONlocal = JSON.stringify([...items, input]);
      localStorage.setItem("data", JSONlocal);
      setInput("");
    }
  };
  return (
    <div className="add-body">
      <div className="add-input">
        <input
          type="text"
          id="myInput"
          placeholder="add details"
          value={input}
          onChange={handleInput}
          style={{
            borderStyle: "solid",
            borderRadius: "5px",
            width: "80%",
            borderColor: "gray",
            borderWidth: "2px",
          }}
        />
        <div className="addBtn" onClick={handleAdd}>
          <>Add</>
        </div>
      </div>
      <div className="LiComponent">
        {items.map((element) => (
          <LiComponent element={element} />
        ))}
      </div>
    </div>
  );
};

export default All;
