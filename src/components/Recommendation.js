import React from "react";

function Recommendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 5;
  const recommendation = isSpring ? (
    <p>C'est le printemps, rempoter !</p>
  ) : (
    <p>Ce n'est pas le moment de rempoter</p>
  );

  return <div>{recommendation}</div>;
}

export default Recommendation;
