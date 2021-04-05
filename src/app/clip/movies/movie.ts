import { IClip } from "../../shared/clip";

export interface IMovie extends IClip {
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
}
