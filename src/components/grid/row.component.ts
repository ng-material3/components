import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-row',
  templateUrl: './row.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-row'
  }
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
