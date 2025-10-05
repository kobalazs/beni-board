"use client";
import React from "react";
import type { Tile } from "../model/grid";

type TileProps = {
  tile: Tile;
  onClick?: (tile: Tile) => void;
};

const Tile: React.FC<TileProps> = ({ tile, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked on tile at position (${tile.x}, ${tile.y})`);
    if (onClick) {
      onClick(tile);
    }
  };

  return (
    <div
      className="border flex items-center justify-center bg-gray-100 cursor-pointer w-10 h-10"
      onClick={handleClick}
    >
      <span>{tile.direction}</span>
    </div>
  );
};

export default Tile;
