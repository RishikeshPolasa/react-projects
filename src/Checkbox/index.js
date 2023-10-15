import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Index() {
  const [forwardVal, setForwardVal] = useState([
    "red",
    "green",
    "yellow",
    "white",
  ]);
  const [backwardVal, setBackwardVal] = useState([
    "purple",
    "violet",
    "black",
    "grey",
  ]);

  const [forwardCheckedVal, setForwardCheckedVal] = useState([]);
  const [backwardCheckedVal, setBackwardCheckedVal] = useState([]);

  const forwardCheck = (e) => {
    if (e.target.checked) {
      //       setForwardVal((prevForwardVal) => [...prevForwardVal, e.target.value]);
      setForwardCheckedVal((prevForwardCheckedVal) => [
        ...prevForwardCheckedVal,
        e.target.value,
      ]);
    } else {
      const newValues = forwardCheckedVal.filter(
        (ele) => ele !== e.target.value
      );
      setForwardCheckedVal(newValues);
    }
  };

  const handleForward = (e) => {
    console.log("val", forwardCheckedVal);
    setBackwardVal([...backwardVal, ...forwardCheckedVal]);
    const newForwardValues = forwardVal.filter(
      (ele) => !forwardCheckedVal.includes(ele)
    );
    setForwardVal(newForwardValues);
    setForwardCheckedVal([]);
  };

  const backwardCheck = (e) => {
    if (e.target.checked) {
      setBackwardCheckedVal((prevBackwardCheckedVal) => [
        ...prevBackwardCheckedVal,
        e.target.value,
      ]);
    } else {
      const newValues = backwardCheckedVal.filter(
        (ele) => ele !== e.target.value
      );
      setBackwardCheckedVal(newValues);
    }
  };

  const handleBackward = (e) => {
    setForwardVal([...forwardVal, ...backwardCheckedVal]);
    const newBackwardValues = backwardVal.filter(
      (ele) => !backwardCheckedVal.includes(ele)
    );
    setBackwardVal(newBackwardValues);
    setBackwardCheckedVal([]);
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="checkboxWrapper">
        <div className="forwardWrapper">
          {forwardVal.map((ele, index) => {
            return (
              <div key={index} className="Checkbox">
                <input
                  type="checkbox"
                  value={ele}
                  onClick={(e) => forwardCheck(e)}
                  checked={forwardCheckedVal.includes(ele)}
                />{" "}
                <label>{ele}</label>
              </div>
            );
          })}
        </div>
        <div className="buttonWrapper">
          <button className="button" onClick={(e) => handleForward(e)}>
            Forward arr
          </button>
          <button className="button" onClick={(e) => handleBackward(e)}>
            backward arr
          </button>
        </div>
        <div className="forwardWrapper">
          {backwardVal.map((ele, index) => {
            return (
              <div key={index} className="Checkbox">
                <input
                  type="checkbox"
                  value={ele}
                  onClick={(e) => backwardCheck(e)}
                  checked={backwardCheckedVal.includes(ele)}
                />{" "}
                <span>{ele}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
