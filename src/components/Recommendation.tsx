import React from "react";

interface RecommendationProps {
  text: string;
  image: string;
  name: string;
  role: string;
  company: string;
  selectedProject: any;
  noProjectSelected: boolean;
  colour: string; 
}

const Recommendation: React.FC<RecommendationProps> = ({
  text,
  image,
  name,
  role,
  company,
  noProjectSelected,
  colour
}: RecommendationProps) => {

  return (
    <div
      className={
        !noProjectSelected
          ? colour + "Dark recommendationContainer"
          : "recommendationContainer"
      }
    >
      <i className="fas fa-quote-left recommendationQuoteIcon"></i>
      <div
        className="recommendationText"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <div className="recommendationFooter">
        <img alt="profile of the recommender" className="recommendationFooterImage" src={image} />
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
