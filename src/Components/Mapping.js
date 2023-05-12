import React from "react";
import Buttons from "./Buttons";
const drag = [
  {
    id: 1,
    button: "GYMNASTICS",
  },
  {
    id: 2,
    button: "ATHLETICS",
  },
  {
    id: 3,
    button: "BASKETBALL",
  },
  {
    id: 3,
    button: "CRICKET",
  },
  {
    id: 4,
    button: "DANCE",
  },
  {
    id: 5,
    button: "FITNESS",
  },
  {
    id: 6,
    button: "RUGBY",
  },
  {
    id: 7,
    button: "Rugby",
  },
];
export default function Mapping() {
  return (
    <>
      <div
        style={{
          width: 1376,
          height: 242,
          borderRadius:20,
          border: "solid #F8F8F8",
          backgroundColor:"#F8F8F8"
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            fontSize: 22,
            textAlign: "initial",
            marginTop: 25,
            marginLeft: 24,
            display: "block",
          }}
        >
          Activites
        </h1>
        <div className="drag" style={{ display: "flex",marginLeft:24 }}>
        {drag.map((buttontxt) => {
  return <Buttons key={buttontxt.id} id={buttontxt.id} button={buttontxt.button} />;
})}
</div>

      </div>
    </>
  );
}
