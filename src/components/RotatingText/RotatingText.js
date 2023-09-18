// import { useEffect } from "react";
import { RotateText } from "../../components/GlobalStyles.styled";

const RotatingText = () => {
  let textArray = [
    "U",
    "X",
    " ",
    "D",
    "e",
    "s",
    "i",
    "g",
    "n",
    " ",
    ".",
    " ",
    "A",
    "t",
    "o",
    "m",
    "i",
    "c",
    " ",
    "D",
    "e",
    "s",
    "i",
    "g",
    "n",
    " ",
    ".",
    " ",
    "P",
    "r",
    "o",
    "d",
    "u",
    "c",
    "t",
    " ",
    ".",
    " ",
    "U",
    "X",
    " ",
    "S",
    "t",
    "r",
    "a",
    "t",
    "e",
    "g",
    "y",
    " ",
    ".",
    " ",
    "C",
    "r",
    "e",
    "a",
    "t",
    "i",
    "v",
    "e",
    " ",
    "D",
    "e",
    "s",
    "i",
    "g",
    "n",
    " ",
    ".",
  ];

  return (
    <RotateText>
      <div className="logo"></div>
      <div className="text">
        <p id="my-paragraph">
          {textArray.map((word, i) => {
            return (
              <span
                className="span"
                key={i}
                style={{ transform: `rotate(${i * 5.2}deg)` }}
              >
                {" "}
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </RotateText>
  );
};

export default RotatingText;

/* <span style={{ transform: `rotate(${0}deg)` }}>U</span>
          <span style={{ transform: `rotate(${4.7}deg)` }}>X</span>
          <span style={{ transform: `rotate(${9.4}deg)` }}> </span>
          <span style={{ transform: `rotate(${14.1}deg)` }}>D</span>
          <span style={{ transform: `rotate(${18.8}deg)` }}>e</span>
          <span style={{ transform: `rotate(${23.5}deg)` }}>s</span>
          <span style={{ transform: `rotate(${28.2}deg)` }}>i</span>
          <span style={{ transform: `rotate(${32.9}deg)` }}>g</span>
          <span style={{ transform: `rotate(${37.6}deg)` }}>n</span>
          <span style={{ transform: `rotate(${42.3}deg)` }}> </span>
          <span style={{ transform: `rotate(${47}deg)` }}>.</span>
          <span style={{ transform: `rotate(${51.7}deg)` }}> </span>
          <span style={{ transform: `rotate(${56.4}deg)` }}>A</span>
          <span style={{ transform: `rotate(${61.1}deg)` }}>t</span>
          <span style={{ transform: `rotate(${65.8}deg)` }}>o</span>
          <span style={{ transform: `rotate(${70.5}deg)` }}>m</span>
          <span style={{ transform: `rotate(${75.2}deg)` }}>i</span>
          <span style={{ transform: `rotate(${79.9}deg)` }}>c</span>
          <span style={{ transform: `rotate(${84.6}deg)` }}> </span>
          <span style={{ transform: `rotate(${89.3}deg)` }}>D</span>
          <span style={{ transform: `rotate(${94}deg)` }}>e</span>
          <span style={{ transform: `rotate(${98.7}deg)` }}>s</span>
          <span style={{ transform: `rotate(${103.4}deg)` }}>i</span>
          <span style={{ transform: `rotate(${108.1}deg)` }}>g</span>
          <span style={{ transform: `rotate(${112.8}deg)` }}>n</span>
          <span style={{ transform: `rotate(${117.5}deg)` }}> </span>
          <span style={{ transform: `rotate(${122.2}deg)` }}>.</span>
          <span style={{ transform: `rotate(${126.9}deg)` }}> </span>
          <span style={{ transform: `rotate(${131.6}deg)` }}>P</span>
          <span style={{ transform: `rotate(${136.3}deg)` }}>r</span>
          <span style={{ transform: `rotate(${141}deg)` }}>o</span>
          <span style={{ transform: `rotate(${145.7}deg)` }}>d</span>
          <span style={{ transform: `rotate(${150.4}deg)` }}>u</span>
          <span style={{ transform: `rotate(${155.1}deg)` }}>c</span>
          <span style={{ transform: `rotate(${159.8}deg)` }}>t</span>
          <span style={{ transform: `rotate(${164.5}deg)` }}> </span>
          <span style={{ transform: `rotate(${169.2}deg)` }}>.</span>
          <span style={{ transform: `rotate(${173.9}deg)` }}> </span>
          <span style={{ transform: `rotate(${178.6}deg)` }}>U</span>
          <span style={{ transform: `rotate(${183.3}deg)` }}>X</span>
          <span style={{ transform: `rotate(${188}deg)` }}> </span>
          <span style={{ transform: `rotate(${192.7}deg)` }}>S</span>
          <span style={{ transform: `rotate(${197.4}deg)` }}>t</span>
          <span style={{ transform: `rotate(${201.1}deg)` }}>r</span>
          <span style={{ transform: `rotate(${206.8}deg)` }}>a</span>
          <span style={{ transform: `rotate(${211.5}deg)` }}>t</span>
          <span style={{ transform: `rotate(${216.2}deg)` }}>e</span>
          <span style={{ transform: `rotate(${220.9}deg)` }}>g</span>
          <span style={{ transform: `rotate(${225.6}deg)` }}>y</span>
          <span style={{ transform: `rotate(${230.3}deg)` }}> </span>
          <span style={{ transform: `rotate(${235}deg)` }}>.</span>
          <span style={{ transform: `rotate(${239.7}deg)` }}> </span>
          <span style={{ transform: `rotate(${244.4}deg)` }}>C</span>
          <span style={{ transform: `rotate(${249.1}deg)` }}>r</span>
          <span style={{ transform: `rotate(${253.8}deg)` }}>e</span>
          <span style={{ transform: `rotate(${258.5}deg)` }}>a</span>
          <span style={{ transform: `rotate(${263.2}deg)` }}>t</span>
          <span style={{ transform: `rotate(${267.9}deg)` }}>i</span>
          <span style={{ transform: `rotate(${272.6}deg)` }}>v</span>
          <span style={{ transform: `rotate(${277.3}deg)` }}>e</span>
          <span style={{ transform: `rotate(${282}deg)` }}> </span>
          <span style={{ transform: `rotate(${286.7}deg)` }}>D</span>
          <span style={{ transform: `rotate(${291.4}deg)` }}>i</span>
          <span style={{ transform: `rotate(${296.1}deg)` }}>r</span>
          <span style={{ transform: `rotate(${300.8}deg)` }}>e</span>
          <span style={{ transform: `rotate(${305.5}deg)` }}>c</span>
          <span style={{ transform: `rotate(${310.2}deg)` }}>t</span>
          <span style={{ transform: `rotate(${314.9}deg)` }}>i</span>
          <span style={{ transform: `rotate(${319.6}deg)` }}>o</span>
          <span style={{ transform: `rotate(${324.3}deg)` }}>n</span>
          <span style={{ transform: `rotate(${329}deg)` }}> </span>
          <span style={{ transform: `rotate(${333.7}deg)` }}>.</span>
          <span style={{ transform: `rotate(${338.4}deg)` }}> </span>
          <span style={{ transform: `rotate(${343.1}deg)` }}>.</span>
          <span style={{ transform: `rotate(${347.8}deg)` }}> </span>
          <span style={{ transform: `rotate(${352.5}deg)` }}>.</span> */
