"use client";
import React from "react";
import { Tile } from "../model/tile";

type TileProps = {
  tile: Tile;
  onClick: (tile: Tile) => void;
};

const TileComponent: React.FC<TileProps> = ({ tile, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked on tile ${JSON.stringify(tile)}`);
    onClick(tile);
  };

  return (
    <div
      className={`border border-black text-black flex items-center justify-center cursor-pointer w-10 h-10 ${
        tile.status == "active" ? "bg-gray-100" : "bg-black"
      }`}
      onClick={handleClick}
    >
      <span>{tile.direction}</span>
    </div>
  );
};

export default TileComponent;
