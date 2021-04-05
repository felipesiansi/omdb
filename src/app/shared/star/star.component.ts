import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'omdb-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input()
  rating: string | number | undefined;
  starPercent: string | undefined;
  ratingDivide: number | undefined;
  faStar = faStar;

  ngOnChanges(): void {
    const numberRating = Number(this.rating);
      if(Number.isNaN(numberRating)){
        this.starPercent = "0px";
      } else {
        this.ratingDivide = numberRating / 2;
        this.starPercent = (this.ratingDivide * 96 / 5) + 'px';
      }
  }
}
