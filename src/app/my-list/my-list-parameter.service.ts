import { Injectable } from '@angular/core';

@Injectable()
export class MyListParameterService {

  showImage: boolean = false;
  filterBy: string = '';
  constructor() { }
}
