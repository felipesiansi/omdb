import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'omdb-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  @Output() valueChange: EventEmitter<string> =new EventEmitter<string>();
  @ViewChild('filterElement')filterElementRef!: ElementRef;
  hitMessage: string = "";

  private _listFilter: string | undefined;
  get listFilter() : string | undefined {

    return this._listFilter;

  }

  set listFilter(value: string | undefined) {


    if(value != this._listFilter && value && value.length >= 3){
      this._listFilter = value;
      this.valueChange.emit(value);
    }

  }

  ngAfterViewInit(): void {
    if(this.filterElementRef){
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['hitCount'] && !changes['hitCount'].currentValue){
      this.hitMessage = 'No matches found';
    }

  }


  ngOnInit() {
  }

}
