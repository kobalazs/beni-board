"use client";
import Tile from "./tile";

export default function Home() {
  const getGrid = (width: number, height: number) => {
    const grid = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        grid.push(<Tile key={`${x}-${y}`} row={x} col={y} />);
      }
    }
    return (
      <div className={`grid grid-cols-${width} grid-rows-${height} gap-0`}>
        {grid}
      </div>
    );
  };

  return <div>{getGrid(10, 10)}</div>;
}
