import { Component,OnInit} from '@angular/core';
import { IClip } from '../shared/clip';
import { MyListService } from '../shared/my-list.service';
import { MyListParameterService } from './my-list-parameter.service';

@Component({
  selector: 'omdb-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {
  pageTitle: string = 'My List';
  clips!: IClip[] | null | undefined;
  imageWidth: number = 100;
  errorMessage = '';


  get showImage(): boolean {
    return this.myListParameterService.showImage;
  }

  set showImage(value: boolean) {
    this.myListParameterService.showImage = value;
  }

  constructor(
    private myListService: MyListService,
    private myListParameterService: MyListParameterService
  ) {}

  ngOnInit(): void {

    this.myListService.getAll().subscribe(
      (clips: IClip[] | null | undefined) => {
          this.clips = clips;
      },
      (error: any) => this.errorMessage = <any>error
    );


  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}
