import { Component } from '@angular/core';

@Component({

//  ⁡⁣selector: '[top-header]', //html tag to attribute ki tarah use krna hai to []
// selector always decide which to use for html tag id class for attribute #,.,[]

// selector:  '.top-header' class ki tarh
// selector:  '#top-header', id ki tarah
// selector:  '[top-header]', attribute ki tarah

  selector:  'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {

}
