import React from "react";
import "./Table.css";

function Table(props) {

  const tableRows = props.tableData.map((rowData, index) => (
    <tr key={index}>
      {rowData.map((cellData, cellIndex) =>{
    console.log(rowData,index);
      return(        
        <td
  key={`${index}-${cellIndex}`}
  onDrop={props.onDrop}
  onDragOver={props.onDragOver}
  dangerouslySetInnerHTML={{ __html: cellData }}
/>

      )})}
    </tr>
  ));

  return (
    <div>
      <table style={{width:1376,border: "solid #E6E6E6",backgroundColor:"#F8F8F8"}}>
        <thead>
          {tableRows[0]}
        </thead>
        <tbody>
          {tableRows.slice(1)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;