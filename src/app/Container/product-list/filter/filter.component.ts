import { Component,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all:number =0;

  @Input()
  inStock:number=0;

  @Input() //parent ---> child send data
  outStock:number=0;


  selectedFilerRadioButton:string = 'all';

  @Output() //child --> parent send data
  selectedFilerRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();

  onselectedFilerRadioButtonChanged(){
    this.selectedFilerRadioButtonChanged.emit(this.selectedFilerRadioButton)
  }

}
