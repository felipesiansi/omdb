import { IEpisode } from "./episode";

export interface ISeason {

 imdbID: string
 Title:  string
 Season: number,
 totalSeasons: number
 Episodes: IEpisode[]

}
