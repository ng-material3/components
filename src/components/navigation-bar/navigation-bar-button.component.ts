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

@Component({
  selector: 'md3-navigation-bar-button',
  templateUrl: './navigation-bar-button.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-bar-button'
  }
})
export class NavigationBarButtonComponent implements OnChanges, OnInit {
  /**
   * @HostBinding selectedBinding: boolean | null | undefined = undefined
   */
  @HostBinding('class.md3-navigation-bar-button--selected') selectedBinding!: boolean | null;

  /**
   * @HostListener onClickListener(event: Event): void
   */
  @HostListener('click', ['$event']) onClickListener(event: Event): void {
    this.onClick.emit(event);
  }

  /**
   * @Input selected: boolean | undefined = undefined
   */
  @Input('selected') selected!: boolean;

  /**
   * @Output click event: EventEmitter<Event>
   */
  @Output('onClick') onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selected'])
      this.selectedBinding = (this.selected) ? true : null;
  }

  ngOnInit(): void {
  }

}
