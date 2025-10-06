"use client";
import { Grid } from "../model/grid";
import TileComponent from "./tile";

type GridProps = {
  grid: Grid;
  onChange: () => void;
};

const GridComponent: React.FC<GridProps> = ({ grid, onChange }) => {
  console.log(grid);
  return (
    <div
      className={`grid grid-cols-${grid.height} grid-rows-${grid.width} gap-0`}
    >
      {grid.tiles.map((tile) => (
        <TileComponent
          key={`${tile.x}-${tile.y}`}
          tile={tile}
          tool={grid.tool}
          onClick={() => {
            grid.clickTile(tile);
            onChange();
          }}
        />
      ))}
    </div>
  );
};

export default GridComponent;
