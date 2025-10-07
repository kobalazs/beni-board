"use client";
import React from "react";
import { Grid } from "../model/grid";
import { Icons, Tool } from "../model/tool";

type ToolboxProps = {
  grid: Grid;
  onChange: () => void;
};

const ToolboxComponent: React.FC<ToolboxProps> = ({ grid, onChange }) => {
  return (
    <div className="mt-10">
      <button
        className={`button border p-2 ${
          grid.tool === Tool.DEFAULT
            ? "bg-gray-500"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => {
          grid.selectTool(Tool.DEFAULT);
          onChange();
        }}
      >
        {Icons[Tool.DEFAULT]}
      </button>
      <button
        className={`button border p-2 ${
          grid.tool === Tool.DRILL
            ? "bg-gray-500"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => {
          if (grid.toolCount[Tool.DRILL] > 0) {
            grid.selectTool(Tool.DRILL);
            onChange();
          }
        }}
      >
        {Icons[Tool.DRILL]} ({grid.toolCount[Tool.DRILL]})
      </button>
      <button
        className={`button border p-2 ${
          [Tool.MOVE_FROM, Tool.MOVE_TO].includes(grid.tool)
            ? "bg-gray-500"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => {
          if (grid.toolCount[Tool.MOVE_FROM] > 0) {
            grid.selectTool(Tool.MOVE_FROM);
            onChange();
          }
        }}
      >
        {Icons[Tool.MOVE_FROM]} ({grid.toolCount[Tool.MOVE_FROM]})
      </button>
    </div>
  );
};

export default ToolboxComponent;
