import React from "react";

export default function Die(props) {
  // const styles = {
  //     backgroundColor: props.isHeld ? "#59E391" : "white"
  // }

  function getImage() {
    if (props.value === 1) {
      return "no-repeat center/contain url(./assets/mario-img.png)";
    } else if (props.value === 2) {
      return "no-repeat center/contain url(./assets/goomba-img.png)";
    } else if (props.value === 3) {
      return "no-repeat center/contain url(./assets/piranha-img.png)";
    } else if (props.value === 4) {
      return "no-repeat center/contain url(./assets/toad-img.png)";
    } else if (props.value === 5) {
      return "no-repeat center/contain url(./assets/yoshi-img.png)";
    } else if (props.value === 6) {
      return "no-repeat center/contain url(./assets/bowser-img.png)";
    }
  }

  const styles = {
    // backgroundColor: props.isHeld ? "green" : "white",
    boxShadow: props.isHeld ? "5px 5px 5px #00ff00" : "5px 5px 5px #000",
    borderColor: props.isHeld ? "#0f0" : "#f00",
    background: props.value ? `${getImage()}` : "white",
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num" style={{ opacity: "0.1" }}>
        {props.value}
      </h2>
    </div>
  );
}
