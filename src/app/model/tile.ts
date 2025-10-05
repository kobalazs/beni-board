export type Direction = "⬅" | "⬆" | "⬇" | "⮕";

export class Tile {
  public direction: Direction;

  constructor(public x: number, public y: number) {
    this.direction = "⬅⬆⬇⮕".charAt(Math.floor(Math.random() * 4)) as Direction;
  }
}
