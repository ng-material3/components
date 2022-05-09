import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-card-headline',
  templateUrl: './card-headline.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card-headline'
  }
})
export class CardHeadlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
