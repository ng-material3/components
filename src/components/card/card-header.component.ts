import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-card-header',
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card-header'
  }
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
