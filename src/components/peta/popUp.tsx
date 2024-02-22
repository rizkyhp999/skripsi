import React from "react";
export const PopUp = (props: any) => {
  return (
    <div id="popup" className="absolute ">
      <h1>Status Bahasa</h1>
      <div className="group">
        Aman
        <ul className="bg-primer group-hover:block hidden">
          <li>Bahasa Lampung</li>
          <li>India</li>
        </ul>
      </div>
      <div className="group">
        Punah
        <ul className="bg-primer group-hover:block hidden">
          <li>Inggris</li>
          <li>Perancis</li>
        </ul>
      </div>
    </div>
  );
};
