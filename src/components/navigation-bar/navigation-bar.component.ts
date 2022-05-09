import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationBarComponent implements OnInit {
  /**
   * public element: HTMLElement | undefined = undefined
   */
  public element!: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement;
  }

}
