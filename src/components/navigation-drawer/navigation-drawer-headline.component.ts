import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-navigation-drawer-headline',
  templateUrl: './navigation-drawer-headline.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-drawer-headline'
  }
})
export class NavigationDrawerHeadlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
