import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-navigation-drawer-label',
  templateUrl: './navigation-drawer-label.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-drawer-label'
  }
})
export class NavigationDrawerLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
