export type Direction = "⬅" | "⬆" | "⬇" | "⮕";
export type Tile = {
  x: number;
  y: number;
  direction: Direction;
};
export type Grid = Array<Tile>;

export const getGrid = (width: number, height: number) => {
  const grid = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      grid.push({
        x,
        y,
        direction: "⬅⬆⬇⮕".charAt(Math.floor(Math.random() * 4)) as Direction,
      });
    }
  }
  return grid;
};
