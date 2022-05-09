import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TopAppBarComponent implements OnInit {
  /**
   * @HostBinding centerAlignedBinding: boolean = false
   */
  @HostBinding('class.md3-top-app-bar--center-aligned') centerAlignedBinding: boolean = false;

  /**
   * @HostBinding largeBinding: boolean = false
   */
  @HostBinding('class.md3-top-app-bar--large') largeBinding: boolean = false;

  /**
   * @HostBinding mediumBinding: boolean = false
   */
  @HostBinding('class.md3-top-app-bar--medium') mediumBinding: boolean = false;

  /**
   * @HostBinding smallBinding: boolean = false
   */
  @HostBinding('class.md3-top-app-bar--small') smallBinding: boolean = false;

  /**
   * @HostBinding scrolledBinding
   */
  @HostBinding('class.md3-top-app-bar--scrolled') scrolledBinding: boolean = false;

  /**
   * @Input title: string | undefined = undefined
   */
  @Input('title') title!: string;

  /**
   * @Input type: 'center-aligned' | 'small' | 'medium' | 'large' = 'small'
   */
  @Input('type') type: 'center-aligned' | 'small' | 'medium' | 'large' = 'small';

  /**
   * public element: HTMLElement | undefined = undefined
   */
  public element!: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.centerAlignedBinding = (this.type == 'center-aligned');
    this.smallBinding = (this.type == 'small');
    this.mediumBinding = (this.type == 'medium');
    this.largeBinding = (this.type == 'large');
    this.element = this.elementRef.nativeElement;
  }

}
