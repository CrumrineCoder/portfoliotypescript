import React, { Component } from "react";
import { throws } from "assert";

interface RecommendationProps {
  selectedProject: any;
  noProjectSelected: boolean;
  colour: string;
  text: string;
  image: string; 
  name: string;
  role: string; 
  company: string; 
}

const Recommendation: React.FC<RecommendationProps> = ({
  selectedProject,
  noProjectSelected,
  colour,
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
          ? "Dark recommendationContainer"
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
