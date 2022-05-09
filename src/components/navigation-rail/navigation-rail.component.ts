import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationRailComponent implements OnInit {
  /**
   * @HostBinding directionBinding: string | undefined = undefined
   */
  @HostBinding('attr.direction') directionBinding!: string;

  /**
   * @HostBinding dividerBinding: boolean | undefined = undefined
   */
  @HostBinding('class.md3-navigation-rail--divider') dividerBinding!: boolean | null;

  /**
   * @HostBinding elevatedBinding: boolean | undefined = undefined
   */
  @HostBinding('class.md3-navigation-rail--elevated') elevatedBinding!: boolean | null;
  
  /**
   * @Input direction: 'start' | 'center' | 'end' | undefined = undefined
   */
  @Input('direction') direction!: 'start' | 'center' | 'end';

  /**
   * @Input divider: boolean | undefined = undefined
   */
  @Input('divider') divider!: boolean;

  /**
   * @Input elevated: boolean | undefined = undefined
   */
  @Input('elevated') elevated!: boolean;

  /**
   * public element: HTMLElement | undefined = undefined
   */
  public element!: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.directionBinding = this.direction;
    this.dividerBinding = (this.divider) ? true : null;
    this.elevatedBinding = (this.elevated) ? true : null;
    this.element = this.elementRef.nativeElement;
  }

}
