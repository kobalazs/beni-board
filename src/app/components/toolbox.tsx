"use client";
import React from "react";
import { Grid } from "../model/grid";

type ToolboxProps = {
  grid: Grid;
  onChange: () => void;
};

const ToolboxComponent: React.FC<ToolboxProps> = ({ grid, onChange }) => {
  return (
    <div className="mt-10">
      <button
        className={`button border p-2 ${
          grid.tool === "drill" ? "bg-gray-500" : "bg-gray-100"
        }`}
        onClick={() => {
          grid.tool = "drill";
          onChange();
        }}
      >
        🪛 ({grid.drillCount})
      </button>
    </div>
  );
};

export default ToolboxComponent;
