import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-bottom-app-bar',
  templateUrl: './bottom-app-bar.component.html',
  styleUrls: ['./bottom-app-bar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BottomAppBarComponent implements OnInit {
  /**
   * @Input direction: 'start' | 'end' | undefined = undefined
   */
  @Input('direction') direction!: 'start' | 'end';

  /**
   * @HostBinding directionBinding: string | undefined = undefined
   */
  @HostBinding('attr.direction') directionBinding!: string;

  /**
   * public element: HTMLElement | undefined = undefined
   * -used to manage content offset bottom from a coordinator layout
   */
  public element!: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.directionBinding = this.direction;
    this.element = this.elementRef.nativeElement;
  }

}
