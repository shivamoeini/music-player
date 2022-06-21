import "./style.css";

const Tabs = ({
  tabData

}) => {


console.log({tabData});

  return (
    <div className="tab-container">
      {/*  tab heder*/}
      <div className="tab-header flex">
        {
         tabData && Object.keys(tabData).map((tab,index)=>{
            <a key={index} className="active" href="#commercial">
            {tabData[tab].lable}
          </a>
          })
        }
      
        <a href="#freelicense">Free License</a>
      </div>
      {/* tab content*/}

      <div className="tab-contents">
        <div className="tab-content" id="commercial">
           <div className="content-wrapper flex justify-sb m-20">
            <div className="content-item">
                <img/>
            </div>
            <div className="content-item">
                <img/>
            </div>
           </div>
        </div>
        <div className="tab-content" id="freelicense">
           freelicecse
        </div>
      </div>
    </div>
  );
};
export default Tabs;
