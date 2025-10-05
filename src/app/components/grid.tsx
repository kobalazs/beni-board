"use client";
import { useState } from "react";
import { Grid } from "../model/grid";
import TileComponent from "./tile";

export default function GridComponent() {
  const [grid, setGrid] = useState<Grid | undefined>(undefined);

  const start = () => {
    setGrid(new Grid(10, 10));
  };

  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-0">
      {grid ? (
        grid.tiles.map((tile) => (
          <TileComponent key={`${tile.x}-${tile.y}`} tile={tile} />
        ))
      ) : (
        <button className="btn btn-blue" onClick={start}>
          Start
        </button>
      )}
    </div>
  );
}
