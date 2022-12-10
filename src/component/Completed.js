import "./Completed.css";
import { ImBin } from "react-icons/im";
import { useState, createContext, useContext } from "react";

export const Display = createContext();

const LiComponent = ({ element }) => {
  const display = useContext(Display);
  const handleDelete1 = () => {
    display.items.splice(0, 1);
    display.setItems([...display.items]);
  };
  return (
    <div className="LiComponent3">
      <div className="component">
        <div>
          <input type={"checkbox"}></input>
        </div>
        <div className="element">{element}</div>
      </div>
      <div onClick={handleDelete1}>
        <ImBin style={{ marginTop: "10px" }} />
      </div>
    </div>
  );
};

const Completed = () => {
  const [items, setItems] = useState(["Task done", "Task done", "Task done"]);
  const handleDeleteAll = () => {
    setItems([]);
  };

  return (
    <Display.Provider
      value={{
        items: items,
        setItems: setItems,
      }}
    >
      <div className="add-body">
        {items.map((element, index) => (
          <LiComponent element={element} key={index} />
        ))}
        <div className="delete-position" onClick={handleDeleteAll}>
          <div className="delete">
            <div>delete all</div>
          </div>
        </div>
      </div>
    </Display.Provider>
  );
};

export default Completed;
