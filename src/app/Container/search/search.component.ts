import { Component,ElementRef,EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';

  //1. Create an event
  @Output() //child-->parent (send data { Container Component })
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  //view child return only First Match Element based on Selectorls

  @ViewChild('searchInputRefrence')
  searchInputEle:ElementRef

  updateSearchText(){

    this.searchText = this.searchInputEle.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText)
  }

}
