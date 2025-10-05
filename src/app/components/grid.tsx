"use client";
import { useReducer } from "react";
import { Grid } from "../model/grid";
import TileComponent from "./tile";

type GridProps = {
  grid: Grid;
};

const GridComponent: React.FC<GridProps> = ({ grid }) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-0">
      {grid.tiles.map((tile) => (
        <TileComponent
          key={`${tile.x}-${tile.y}`}
          tile={tile}
          onClick={() => {
            grid.removeTile(tile);
            forceUpdate();
          }}
        />
      ))}
    </div>
  );
};

export default GridComponent;
