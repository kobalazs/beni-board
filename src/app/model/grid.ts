import { Tile } from "./tile";

export class Grid {
  public tiles: Array<Tile> = [];

  constructor(width: number, height: number) {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        this.tiles.push(new Tile(x, y));
      }
    }
  }

  public removeTile(tile: Tile) {
    tile.direction = undefined;
  }
}
