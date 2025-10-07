export enum Tool {
  DEFAULT = 1,
  DRILL = 2,
  MOVE_FROM = 3,
  MOVE_TO = 4,
}

export const Icons: Record<Tool, string> = {
  [Tool.DEFAULT]: "👆",
  [Tool.DRILL]: "🪛",
  [Tool.MOVE_FROM]: "♻️",
  [Tool.MOVE_TO]: "🎯",
};
