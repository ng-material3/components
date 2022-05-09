import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-card-subhead',
  templateUrl: './card-subhead.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card-subhead'
  }
})
export class CardSubheadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
