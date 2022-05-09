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
  selector: 'md3-navigation-rail-button',
  templateUrl: './navigation-rail-button.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-rail-button'
  }
})
export class NavigationRailButtonComponent implements OnChanges, OnInit {
  /**
   * @HostBinding selectedBinding: boolean | null | undefined = undefined
   */
  @HostBinding('class.md3-navigation-bar-button--selected') selectedBinding!: boolean | null;

  /**
   * @HostListener onClickListener(event: Event)
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
