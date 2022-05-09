import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-col',
  templateUrl: './col.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-col'
  }
})
export class ColComponent implements OnInit {
  /**
   * @HostBinding sizeBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size') sizeBinding!: string | null;

  /**
   * @Input size: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined = undefined
   */
  @Input('size') size!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

  /**
   * @HostBinding sizeXsBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size-xs') sizeXsBinding!: string | null;

  /**
   * @Input size-xs: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined = undefined
   */
  @Input('size-xs') sizeXs!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

  /**
   * @HostBinding sizeSmBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size-sm') sizeSmBinding!: string | null;

  /**
   * @Input size-sm: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined = undefined
   */
  @Input('size-sm') sizeSm!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

  /**
   * @HostBinding sizeMdBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size-md') sizeMdBinding!: string | null;

  /**
   * @Input size-md: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined = undefined
   */
  @Input('size-md') sizeMd!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

  /**
   * @HostBinding sizeLgBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size-lg') sizeLgBinding!: string | null;

  /**
   * @Input size-lg: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined = undefined
   */
  @Input('size-lg') sizeLg!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';

  /**
   * @HostBinding sizeXlBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size-xl') sizeXlBinding!: string | null;

  /**
   * @Input size-xl: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined = undefined
   */
  @Input('size-xl') sizeXl!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';


  constructor() { }

  ngOnInit(): void {
    this.sizeBinding = (this.size) ? this.size : null;
    this.sizeXsBinding = (this.sizeXs) ? this.sizeXs : null;
    this.sizeSmBinding = (this.sizeSm) ? this.sizeSm : null;
    this.sizeMdBinding = (this.sizeMd) ? this.sizeMd : null;
    this.sizeLgBinding = (this.sizeLg) ? this.sizeLg : null;
    this.sizeXlBinding = (this.sizeXl) ? this.sizeXl : null;
  }

}
