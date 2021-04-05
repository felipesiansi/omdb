import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IClip } from '../clip';
import { MyListService } from '../my-list.service';

@Component({
  selector: 'omdb-add-remove-my-list',
  templateUrl: './add-remove-my-list.component.html',
  styleUrls: ['./add-remove-my-list.component.scss'],
})
export class AddRemoveMyListComponent implements OnInit, OnChanges {
  errorMessage: string = '';
  faBtn = faPlus;
  descriptionBtn : string = ' Add My List';
  sub: Subscription | undefined;
  selectedClip!: IClip | null;


  @Input()
  clip!: IClip;

  constructor(private myListService: MyListService) {}

  ngOnInit(): void {


  }


  private checkInMyList(clip : IClip |null) {
    if (this.myListService.checkClipInList(this.clip)) {
      this.faBtn = faTimes;
      this.descriptionBtn = ' Remove My List';
    }else
    {
      this.faBtn = faPlus;
      this.descriptionBtn = ' Add My List';
    }
  }

  addClip() {
    if (this.clip) {


      if (this.myListService.checkClipInList(this.clip)) {
        this.removeClipMyList();
      }else
      {
        this.myListService.add(this.clip).subscribe(
          () =>{
           alert("Add item success");
           this.checkInMyList(this.clip);
           },
          (error: any) => (this.errorMessage = <any>error)
        );
      }


    }
  }

  removeClipMyList() {
    if (
      confirm(`Really delete the clip : ${this.clip?.Title} from your list ?`)
    ) {
      this.myListService.clear(this.clip).subscribe(
        () =>{
         alert("Remove item success");
         this.checkInMyList(this.clip);
         },
        (error: any) => (this.errorMessage = <any>error)
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['clip']){
      this.checkInMyList(this.clip);
    }

  }


  ngOnDestroy(): void {

  }
}
