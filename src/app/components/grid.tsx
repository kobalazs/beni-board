"use client";
import { getGrid } from "../model/grid";
import Tile from "./tile";

const grid = getGrid(10, 10);

export default function Home() {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-0">
      {grid.map((tile) => (
        <Tile key={`${tile.x}-${tile.y}`} tile={tile} />
      ))}
    </div>
  );
}
