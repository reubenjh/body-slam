export enum MoveType {
  Normal = "normal",
  Psychic = "psychic",
}

export type MoveTypeMap = { [key in MoveType]: string };
