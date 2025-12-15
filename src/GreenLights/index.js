import React, { useState } from "react";
import { GridWrapper, Grid } from "./Style";
function GreenLights() {
  const gridCellsCount = 9;
  const [filled, setFilled] = useState([]);

  const handleGridCell = (e, index) => {
    if (filled.includes(index)) return;
    setFilled((prev) => [...prev, index]);

    const length = filled.length;
    if (length === gridCellsCount - 1) {
      const order = [...filled, index];
      order.reverse().map((_, index) => {
        setTimeout(() => {
          setFilled((prev) => prev.filter((item) => item !== order[index]));
        }, 300 * index + 100);
      });
    }
  };
  return (
    <div>
      Green Lights
      <GridWrapper>
        {Array.from({ length: gridCellsCount }).map((_, index) => {
          return (
            <Grid
              filled={filled?.includes(index)}
              key={index}
              onClick={(e) => handleGridCell(e, index)}
            ></Grid>
          );
        })}
      </GridWrapper>
    </div>
  );
}

export default GreenLights;
