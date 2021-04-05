import { IClip } from "./clip";

export interface IMedia {
  totalResults: number;
  Search: IClip[];
  Error: string;
}
