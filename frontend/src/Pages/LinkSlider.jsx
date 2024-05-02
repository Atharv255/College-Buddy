import React, { useState, useEffect } from "react";
import "../CSS/LinkSlider.css";

const LinkSlider = ({ links, speed }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % links.length);
    }, speed);

    return () => clearInterval(interval);
  }, [links.length, speed]);

  return (
    <div className="link-slider">
      {links.map((link, index) => (
        <a
          target="_blank"
          key={index}
          href={link}
          className={index === position ? "active" : ""}
        >
          {link}
        </a>
      ))}{" "}
      <br></br>
    </div>
  );
};
export default LinkSlider;

// const App = () => {
//   const links = [
//     "https://prepinsta.com/tcs-nqt/placement-papers/coding-questions/",
//     "https://www.indiabix.com/aptitude/questions-and-answers/",
//     "https://www.w3schools.com/sql/",
//     "https://developer.mozilla.org/en-US/",
//   ];

//   return (
//     <div className="App">
//       <h1>StudySlider</h1>
//       <LinkSlider links={links} speed={2000} />
//     </div>
//   );
// };

// export default App;
