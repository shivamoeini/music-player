import { useState } from "react";
import "./style.css";

const Tabs = ({ tabData }) => {
  const [touched, setTouched] = useState(false);
  const [active, setActive] = useState("");
  console.log({ tabData });

  return (
    <div className="tab-container">
      {/*  tab heder*/}
      <div className="tab-header flex">
        {tabData &&
          Object.keys(tabData).map((tab, index) => (
            <a
              key={index}
              className={`${
                touched
                  ? active === tab
                    ? "active"
                    : ""
                  : tabData[tab].setActive
                  ? "active"
                  : ""
              }`}
              href={`#${tab}`}
              onClick={() => {
                setTouched(true);
                setActive(tab);
              }}
            >
              {tabData[tab].label}
            </a>
          ))}
      </div>
      {/* tab content*/}

      <div className="tab-contents">
        {tabData &&
          Object.keys(tabData).map((tab, index) => {
            <div className="tab-content" id={`${tab}`}>
              <div className="content-wrapper flex justify-sb m-20">
                <div className="content-item">
                  <img />
                </div>
                <div className="content-item">
                  <img />
                </div>
              </div>
            </div>;
          })}
      </div>
    </div>
  );
};
export default Tabs;
