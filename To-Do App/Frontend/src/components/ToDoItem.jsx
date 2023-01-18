import React from "react";

function ToDoItem(props) {
  console.log("props.data", props?.id)
  return (
    <div
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
