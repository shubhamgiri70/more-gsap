import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.from(boxRef.current, {
      rotate: 360,
      delay: 1,
      duration: 0.5,
    });
  });

  return (
    <main>
      <div className="container">
        <div ref={boxRef} className="box"></div>
        <div className="circle"></div>
      </div>
      <div className="container-two">
        <div className="box"></div>
        <div className="circle"></div>
      </div>
    </main>
  );
};

export default App;
