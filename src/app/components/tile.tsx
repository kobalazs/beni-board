"use client";
import React from "react";
import { Tile } from "../model/tile";
import { Icons, Tool } from "../model/tool";

type TileProps = {
  tile: Tile;
  tool: Tool;
  isSelected: boolean;
  onClick: (tile: Tile) => void;
};

const getCursor = (tool: Tool) =>
  `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="120" style="font-size: 26px;"><text y="25">${Icons[tool]}</text></svg>'), auto`;

const TileComponent: React.FC<TileProps> = ({
  tile,
  tool,
  isSelected,
  onClick,
}) => {
  const getBackground = () => {
    if (tile.status === "removed") {
      return "!bg-black";
    }
    if (isSelected) {
      return "!bg-green-200";
    }

    return "bg-gray-100";
  };

  const handleClick = () => {
    console.log(`Clicked on tile ${JSON.stringify(tile)}`);
    onClick(tile);
  };

  return (
    <div
      className={`border border-black text-black flex items-center justify-center w-10 h-10 ${getBackground()} hover:bg-gray-200`}
      style={{ cursor: tile.status === "active" ? getCursor(tool) : "default" }}
      onClick={handleClick}
    >
      <span>{tile.direction}</span>
    </div>
  );
};

export default TileComponent;
