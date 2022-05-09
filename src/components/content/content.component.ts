import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'md3-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  /**
   * @HostBinding fullscreenBinding: boolean | null | undefined = undefined
   */
  @HostBinding('class.md3-content--fullscreen') fullscreenBinding!: boolean | null;

  /**
   * @Input fullscreen: boolean | undefined = undefined
   */
  @Input('fullscreen') fullscreen!: boolean;

  /**
   * public element: HTMLElement | undefined = undefined
   */
  public element!: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement;
    this.fullscreenBinding = (this.fullscreen) ? true : null;
  }

}
