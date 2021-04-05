import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omdb-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  showTabDetailsSerie : boolean = true;
  showTabSugestionSerie : boolean = false;
  showTabEpisodeSerie : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  behaviour(el : HTMLAnchorElement): void {

    let dataName = el.getAttribute('data-nametab');

    this.showTabDetailsSerie = dataName === "detailsSerie" ? true : false;
    this.showTabSugestionSerie = dataName === "sugestionSerie" ? true : false;
    this.showTabEpisodeSerie = dataName === "episodesSerie" ? true : false;

    return;
  }

}
