export type Direction = "⬅" | "⬆" | "⬇" | "⮕";

export class Tile {
  public direction: Direction;
  public status: "active" | "removed" = "active";

  constructor(public x: number, public y: number) {
    this.direction = "⬅⬆⬇⮕".charAt(Math.floor(Math.random() * 4)) as Direction;
  }
}
