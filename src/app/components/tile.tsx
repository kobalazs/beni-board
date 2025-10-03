import React from "react";

type TileProps = {
  row: number;
  col: number;
  onClick?: (row: number, col: number) => void;
};

const Tile: React.FC<TileProps> = ({ row, col, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked on tile at position (${row}, ${col})`);
    if (onClick) {
      onClick(row, col);
    }
  };

  return (
    <div
      className="border flex items-center justify-center bg-gray-100 cursor-pointer w-10 h-10"
      onClick={handleClick}
    >
      <span>{"⬅⬆⬇⮕".charAt(Math.floor(Math.random() * 4))}</span>
    </div>
  );
};

export default Tile;
