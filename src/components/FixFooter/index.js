import { useState } from "react";
import "./style.css";
const FixFooter = (props) => {
  const [slideUp, setSlideUp] = useState(false);
  return (
    <div className={`fix-footer ${slideUp ? "active" : ""}`}>
      <div onClick={() => setSlideUp(!slideUp)} className="silde-up-btn"></div>
      <div className="d-visilibity"></div>
    </div>
  );
};
export default FixFooter;
