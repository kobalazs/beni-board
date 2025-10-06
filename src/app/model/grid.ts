import { Direction } from "./tile";
import { Tile } from "./tile";

export class Grid {
  public tiles: Array<Tile> = [];
  public tool: "default" | "drill" = "default";
  public drillCount: number = 10;

  constructor(public width: number, public height: number) {
    for (let y = 0; y < width; y++) {
      for (let x = 0; x < height; x++) {
        this.tiles.push(new Tile(x, y));
      }
    }
  }

  public getTileAt(x: number, y: number): Tile | undefined {
    return this.tiles.find((tile) => tile.x === x && tile.y === y);
  }

  public clickTile(tile: Tile): void {
    switch (this.tool) {
      case "default":
        this.removeTile(tile);
        break;
      case "drill":
        if (this.drillCount > 0) {
          tile.status = "removed";
          this.drillCount--;
          this.tool = "default";
        }
        break;
      default:
        throw new Error("Invalid tool");
    }
  }

  private removeTile(tile: Tile): void {
    let neighbour = this.getTileNeighbor(tile, tile.direction);
    while (neighbour) {
      if (neighbour.status !== "removed") {
        return;
      }
      neighbour = this.getTileNeighbor(neighbour, tile.direction);
    }
    tile.status = "removed";
  }

  private getTileNeighbor(tile: Tile, direction: Direction): Tile | undefined {
    switch (direction) {
      case "⬆":
        return this.getTileAt(tile.x, tile.y - 1);
      case "⬇":
        return this.getTileAt(tile.x, tile.y + 1);
      case "⬅":
        return this.getTileAt(tile.x - 1, tile.y);
      case "⮕":
        return this.getTileAt(tile.x + 1, tile.y);
      default:
        throw new Error("Invalid direction");
    }
  }
}
