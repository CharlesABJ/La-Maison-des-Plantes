import React from "react";
function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? "☀️" : "💧";
  return (
    <div>
      {range.map((e) =>
        scaleValue >= e ? <span key={e.toString()}>{scaleType}</span> : null
      )}
    </div>
  );
}

export default CareScale;
