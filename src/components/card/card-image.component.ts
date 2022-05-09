import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-card-image',
  templateUrl: './card-image.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card-image'
  }
})
export class CardImageComponent implements OnInit {
  /**
   * @Input size: string | null = null
   * -binds host size
   * -size: 'auto' | 'static'
   */
  @Input('size') size!: string;

  /**
   * @Input slot: string | null = null
   * -binds host slot
   * -slots: 'start' | 'end'
   */
  @Input('slot') slot!: string;

  /**
   * @Input src: string | null = null
   * -binds img src
   */
  @Input('src') src!: string;
 
  /**
   * @HostBinding sizeBinding
   * -binds size attribute
   */
  @HostBinding('attr.size') sizeBinding!: string | null;
 
  /**
   * @HostBinding slotBinding
   * -binds slot attribute
   */
  @HostBinding('attr.slot') slotBinding!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.sizeBinding = (this.size) ? this.size : null;
    this.slotBinding = (this.slot) ? this.slot : null;
  }

}
