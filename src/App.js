import React, { useState } from "react";
import Table from "./Components/Table";
import Mapping from "./Components/Mapping";
function App() {
  const [droppedButtons, setDroppedButtons] = useState([]);
  const [buttonText, setButtonText] = useState("");
  const [tabledata, settabledata] = useState([
    [
      "",
      "Autumn 1",
      "Autumn 2 ",
      "Autumn 3",
      "Autumn 4",
      "Autumn 5",
      "Autumn 6",
    ],
    ["EYFS", "", "", "", "", "", ""],
    ["KSY1", "", "", "", "", "", ""],
    ["KSY2", "", "", "", "", "", ""],
    ["KSY3", "", "", "", "", "", ""],
  ]);

 const handleDrop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("button");
  const target = event.target;

  // Check if the target is a td element
  if (target.tagName !== "TD") {
    return;
  }

  const existingContent = target.innerHTML;

  // Check if the cell already has two buttons
  if (existingContent.split("<button").length - 1 >= 2) {
    alert("You can only drop two buttons in each cell!");
    return;
  }

  // Check if the cell contains any of the restricted values
  const restrictedValues = ["Autumn", "EYFS", "KSY1", "KSY2", "KSY3"];
  const containsRestrictedValue = restrictedValues.some((value) =>
    existingContent.includes(value)
  );
  if (containsRestrictedValue) {
    alert("This cell cannot receive buttons!");
    return;
  }

  // Check if the button already exists in the cell
  if (existingContent.includes(data)) {
    alert("This button already exists in the cell!");
    return;
  }

  // Add the new button to the cell
  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "button-wrapper";
  buttonWrapper.innerHTML = `${data}<span class="delete-button" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">×</span>`;
  target.appendChild(buttonWrapper);
};

  
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: 40 }}>
        {" "}
        <Mapping />
      </div>
      <div style={{ marginTop: 24 }}>
        <Table
          buttonText={buttonText}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          tableData={tabledata}
        />
      </div>
    </div>
  );
}

export default App;
