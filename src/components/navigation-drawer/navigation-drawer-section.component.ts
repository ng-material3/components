import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-navigation-drawer-section',
  templateUrl: './navigation-drawer-section.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-drawer-section'
  }
})
export class NavigationDrawerSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
