import axios from "axios";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    fetchTodos();
  }

  const fetchTodos = () => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setItems(data.todos);
      });
  };

  React.useEffect(() => {
    fetchTodos();
  }, []);

  const deleteItem = (id) => {
    axios.delete("http://localhost:3000/deleteTodo/" + id).then((response) => {
      alert("Todo Deleted");
      fetchTodos();
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do App</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={todoItem?._id}
              id={todoItem?._id}
              text={todoItem?.data}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
