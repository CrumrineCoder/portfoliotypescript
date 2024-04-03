import React, { Component } from "react";
import { throws } from "assert";

interface RecommendationProps {
  text: string;
  image: string;
  name: string;
  role: string;
  company: string;
  selectedProject: any;
  noProjectSelected: boolean;
}

const Recommendation: React.FC<RecommendationProps> = ({
    text,
    image,
    name,
    role,
    company,
    selectedProject,
    noProjectSelected,
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
