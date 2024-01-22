import React from "react";
export const PopUp = (props: any) => {
  return (
    <div id="popup" className="absolute">
      {props.text}
    </div>
  );
};
