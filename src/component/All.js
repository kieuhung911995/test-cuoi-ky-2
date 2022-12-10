import "./All.css";
import { useState } from "react";

const LiComponent = ({ element }) => {
  return (
    <div className="component">
      <div>
        <input type={"checkbox"}></input>
      </div>
      <div>{element}</div>
    </div>
  );
};

const All = () => {
  const [items, setItems] = useState([
    "Do coding challenges",
    "Do coding challenges",
    "Do coding challenges",
  ]);
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleAdd = () => {
    if (input === "") {
      alert("You must add something!");
    } else {
      setItems([...items, input]); //input co the lon len truoc ...items
      setInput("");
    }
  };
  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="add details"
          value={input}
          onChange={handleInput}
          style={{ borderStyle: "solid", borderRadius: "5px" }}
        />
        <span className="addBtn" onClick={handleAdd}>
          <>Add</>
        </span>
      </div>
      {items.map((element) => (
        <LiComponent element={element} />
      ))}
    </>
  );
};

export default All;
