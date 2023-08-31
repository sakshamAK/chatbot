import React from "react";
import { useSelector } from "react-redux";
import style from "./ThanksForVisit.module.css";

export const ThanksForVisit = () => {
  const { userDetails } = useSelector((state) => state.chat);
  return (
    <div className={style.landing}>
      <div className={style.intro}>
        <h1>
          Your name {userDetails.name} aged {userDetails.age} has been added to
          student system.
        </h1>
        <h1 style={{ color: "white" }}>You may now exit.</h1>
      </div>
      <div className={style.introBlob}>
        <img
          src={new URL("../../assets/blobBoy.png", import.meta.url).href}
          className={style.blob}
        />
      </div>
    </div>
  );
};
