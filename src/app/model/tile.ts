export type Direction = "⬅" | "⬆" | "⬇" | "⮕";

export class Tile {
  public direction: Direction;
  public status: "active" | "removed" = "active";

  constructor(public x: number, public y: number) {
    this.direction = "⬅⬆⬇⮕".charAt(Math.floor(Math.random() * 4)) as Direction;
  }

  public isNeighborOf(tile?: Tile) {
    return (
      tile && Math.abs(this.x - tile.x) <= 1 && Math.abs(this.y - tile.y) <= 1
    );
  }
}
