import React, { useState } from "react";
import { aboutData } from "../../data/data";
import "./style.css";

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };
  const renderedData = aboutData.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="accordion-icon">{isExpanded ? "-" : "+"}</span>
    );

    return (
      <div key={item.id}>
        {/* <div className="container"> */}
        <div className="accordion-item">
          <div className="header" onClick={() => handleClick(index)}>
            <h2 className={isExpanded ? "active" : "inactive"}>
              {" "}
              {item.header}
            </h2>
            {icon}
          </div>
          {isExpanded && <div className="content">{item.content}</div>}
        </div>
        {/* </div> */}
      </div>
    );
  });
  return <div className="accordion">{renderedData}</div>;
};

export default Accordion;
