"use client";
import { Grid } from "../model/grid";
import TileComponent from "./tile";

type GridProps = {
  grid: Grid;
};

const GridComponent: React.FC<GridProps> = ({ grid }) => {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-0">
      {grid.tiles.map((tile) => (
        <TileComponent key={`${tile.x}-${tile.y}`} tile={tile} />
      ))}
    </div>
  );
};

export default GridComponent;
