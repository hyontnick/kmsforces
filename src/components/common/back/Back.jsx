import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  // Map the path to a corresponding CSS class
  const getClassByPath = (path) => {
    switch (path) {
      case "courses":
        return "courses";
      case "about":
        return "about";
      case "contact":
        return "contact";
      default:
        return "default";
    }
  };

  const className = `back ${getClassByPath(path)}`;

  return (
    <>
      <section className={className}>
        <h2>Accueil / {path}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Back;
