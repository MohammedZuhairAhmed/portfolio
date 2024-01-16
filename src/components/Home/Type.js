import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

function Type({about}) {

  return (
    <Typewriter
      options={{
        strings: about,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
