"use client";
import { Grid } from "../model/grid";
import TileComponent from "./tile";

type GridProps = {
  grid: Grid;
  onChange: () => void;
};

const GridComponent: React.FC<GridProps> = ({ grid, onChange }) => {
  return (
    <div className={`grid grid-cols-6 grid-rows-6 gap-0`}>
      {grid.tiles.map((tile) => (
        <TileComponent
          key={`${tile.x}-${tile.y}`}
          tile={tile}
          tool={grid.tool}
          isSelected={tile === grid.moveFrom}
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
