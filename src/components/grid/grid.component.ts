import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-grid'
  }
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
