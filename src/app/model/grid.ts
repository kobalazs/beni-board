import { Direction } from "./tile";
import { Tile } from "./tile";
import { Tool } from "./tool";

export class Grid {
  public tiles: Array<Tile> = [];
  public tool: Tool = Tool.DEFAULT;
  public toolCount: Record<Tool, number> = {
    [Tool.DEFAULT]: Infinity,
    [Tool.DRILL]: 10,
    [Tool.MOVE_FROM]: 10,
    [Tool.MOVE_TO]: Infinity,
  };
  public moveFrom?: Tile;

  constructor(public width: number, public height: number) {
    for (let y = 0; y < width; y++) {
      for (let x = 0; x < height; x++) {
        this.tiles.push(new Tile(x, y));
      }
    }
  }

  public selectTool(tool: Tool) {
    if (this.toolCount[tool] > 0) {
      this.tool = tool;
      this.moveFrom = undefined;
    }
  }

  public getTileAt(x: number, y: number): Tile | undefined {
    return this.tiles.find((tile) => tile.x === x && tile.y === y);
  }

  public clickTile(tile: Tile): void {
    if (tile.status === "removed") {
      return;
    }
    switch (this.tool) {
      case Tool.DEFAULT:
        this.removeTile(tile);
        break;
      case Tool.DRILL:
        tile.status = "removed";
        this.toolCount[Tool.DRILL]--;
        break;
      case Tool.MOVE_FROM:
        this.moveFrom = tile;
        this.tool = Tool.MOVE_TO;
        return; // do not switch back to default
      case Tool.MOVE_TO:
        if (!this.moveFrom || !tile.isNeighborOf(this.moveFrom)) {
          return;
        }
        const direction = tile.direction;
        tile.direction = this.moveFrom.direction;
        this.moveFrom.direction = direction;
        this.moveFrom = undefined;
        this.toolCount[Tool.MOVE_FROM]--;
        break;
      default:
        throw new Error("Invalid tool");
    }
    this.tool = Tool.DEFAULT;
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
