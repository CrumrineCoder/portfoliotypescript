import React, { Component } from "react";
import { throws } from "assert";

interface RecommendationProps {
  selectedProject: any;
  colour: string;
}

const Recommendation: React.FC<RecommendationProps> = ({
  selectedProject,
  noProjectSelected,
  colour,
  class,
  text,
  image,
  name,
  role,
  company,

}) => {
  var color = "";
  if (selectedProject != null) {
    color = color;
  }
  /*
        </div>
            <div style={{background: color}} className="recommendationContainer">
            */
  return (
    <div
      className={
        !noProjectSelected
          ? class + "Dark recommendationContainer"
          : "recommendationContainer"
      }
    >
      <i className="fas fa-quote-left recommendationQuoteIcon"></i>
      <div
        className="recommendationText"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <div className="recommendationFooter">
        <img className="recommendationFooterImage" src={image} />
        <div className="recommendationFooterText">
          <p className="recommendatonFooterName">{name}</p>
          <p className="recommendationFooterCompany">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
