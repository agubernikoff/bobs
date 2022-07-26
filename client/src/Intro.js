import React from "react";
import bobIntro from "./assets/bobIntro.gif";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/home");
  }, 18600);
  return (
    <div className="intro">
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        {"SKIP >>>"}
      </button>
      <img className="introGif" src={bobIntro} alt={"bobs burgers"} />
    </div>
  );
}

export default Intro;
