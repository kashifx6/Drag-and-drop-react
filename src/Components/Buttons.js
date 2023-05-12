import React, { useState } from "react";
import './Table.css'

const Buttons = (props) => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event) => {
    const button = event.currentTarget;
    event.dataTransfer.setDragImage(button, 0, 0);
    event.dataTransfer.setData("button", button.outerHTML);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div>
      <button
  className="button"
  onClick={() => window.location.href = ''}
  draggable="true"
  onDragStart={handleDragStart}
  onDragEnd={handleDragEnd} 
>
  {props.button}
</button>

    </div>
  );
};


export default Buttons;    