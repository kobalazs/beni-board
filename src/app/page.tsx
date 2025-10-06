"use client";
import { useReducer, useState } from "react";
import GridComponent from "./components/grid";
import { Grid } from "./model/grid";
import ToolboxComponent from "./components/toolbox";

export default function Home() {
  const [grid, setGrid] = useState<Grid | undefined>(undefined);

  const start = () => {
    setGrid(new Grid(10, 10));
  };

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Beni Board</h1>
        {grid ? (
          <div>
            <GridComponent grid={grid} onChange={forceUpdate} />
            <ToolboxComponent grid={grid} onChange={forceUpdate} />
          </div>
        ) : (
          <button className="btn border p-2 bold" onClick={start}>
            Start
          </button>
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
