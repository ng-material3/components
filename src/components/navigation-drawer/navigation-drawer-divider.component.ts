import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-navigation-drawer-divider',
  templateUrl: './navigation-drawer-divider.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-drawer-divider'
  }
})
export class NavigationDrawerDividerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
