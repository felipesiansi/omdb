import { Rating } from "../clip/rating";
import { ClipTypeEnum } from "../clip/cliptype.enum";

export interface IClip {
  imdbID: string | null
  Title: string
  Year: number
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: number
  imdbRating: number | string | undefined
  imdbVotes: number
  Type: ClipTypeEnum
  totalResults: number;
  Error: string;
}
