import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-card-content',
  templateUrl: './card-content.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card-inner-content'
  }
})
export class CardContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
