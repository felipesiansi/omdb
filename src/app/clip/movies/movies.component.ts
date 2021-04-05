import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'omdb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  showTabDetailsMovie : boolean = true;
  showTabSugestionMovie : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  behaviour(el : HTMLAnchorElement): void {

    let dataName = el.getAttribute('data-nametab');

    this.showTabSugestionMovie = dataName === "sugestionMovie" ? true : false;
    this.showTabDetailsMovie = dataName === "detailsMovie" ? true : false;

    return;
  }

}
