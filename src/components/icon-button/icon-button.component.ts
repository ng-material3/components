import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { NavigationDrawerTrigger } from '../navigation-drawer/navigation-drawer.component';

@Component({
  selector: 'md3-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class IconButtonComponent implements OnChanges, OnInit {
  /**
   * @HostBinding disabledBinding: boolean | null
   */
  @HostBinding('attr.disabled') disabledBinding!: boolean | null;
 
  /**
   * @HostBinding sizeBinding: string | null | undefined = undefined
   */
  @HostBinding('attr.size') sizeBinding!: string | null;

  /**
   * @HostListener onClickListener(event: Event)
   */
  @HostListener('click', ['$event']) onClickListener(event: Event): void {
    event.stopPropagation();
    
    if (!this.disabled) {
      if (this.type) {
        switch (this.type) {
          case 'navigation-drawer':
              NavigationDrawerTrigger.trigger.emit();
    
            break;
        }
      }
      
      this.onClick.emit(event);
    }
  }

  /**
   * @Input disabled: boolean | undefined = undefined
   */
  @Input('disabled') disabled!: boolean;

  /**
   * @Input size: 'extra-small' | 'small' | 'medium' | undefined = undefined
   */
  @Input('size') size!: 'extra-small' | 'small' | 'medium';

  /**
   * @Input type: 'navigation-drawer' | undefined = undefined
   */
  @Input('type') type!: 'navigation-drawer';

  /**
   * @Output click event
   */
  @Output('onClick') onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnChanges(_changes: SimpleChanges): void {
    if (_changes['disabled'])
      this.disabledBinding = (this.disabled) ? true : null;
  }

  ngOnInit(): void {
    this.sizeBinding = (this.size) ? this.size : null;
  }

}
