import React from "react";

function Cross() {
    return (
      <svg height="100" width="100" viewBox="-50 -50 100 100" className="cross">
        <line x1="40" y1="40" x2="-40" y2="-40" />
        <line x1="-40" y1="40" x2="40" y2="-40" />
      </svg>
    );
  }
  
export default Cross;