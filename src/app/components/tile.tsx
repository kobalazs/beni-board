"use client";
import React from "react";
import { Tile } from "../model/tile";

type TileProps = {
  tile: Tile;
  tool: "default" | "drill";
  onClick: (tile: Tile) => void;
};

const cursors: Record<"default" | "drill", string> = {
  default: "pointer",
  drill: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="120" style="font-size: 26px;"><text y="25">🪛</text></svg>'), auto`,
};

const TileComponent: React.FC<TileProps> = ({ tile, tool, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked on tile ${JSON.stringify(tile)}`);
    onClick(tile);
  };

  return (
    <div
      className={`border border-black text-black flex items-center justify-center w-10 h-10 ${
        tile.status == "active" ? "bg-gray-100" : "bg-black"
      }`}
      style={{ cursor: tile.status === "active" ? cursors[tool] : "default" }}
      onClick={handleClick}
    >
      <span>{tile.direction}</span>
    </div>
  );
};

export default TileComponent;
