import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationDrawerButtonComponent } from './navigation-drawer-button.component';

export class NavigationDrawerTrigger {
  private static _trigger: EventEmitter<null>;

  constructor() { }

  static set trigger(_value: EventEmitter<null>) {
    this._trigger = _value;
  }

  static get trigger(): EventEmitter<null> {
    return this._trigger;
  }
}

@Component({
  selector: 'md3-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-navigation-drawer'
  }
})
export class NavigationDrawerComponent implements OnChanges, OnDestroy, OnInit, AfterContentInit {
  /**
   * @ContentChildren navigationDrawerButtons: QueryList<NavigationDrawerButtonComponent> | null | undefined = undefined
   */
  @ContentChildren(NavigationDrawerButtonComponent, { descendants: true, read: NavigationDrawerButtonComponent }) navigationDrawerButtons!: QueryList<NavigationDrawerButtonComponent>;

  /**
   * @HostBinding typeBinding: string | undefined = undefined
   */
  @HostBinding('attr.type') typeBinding!: string;

  /**
   * @HostBinding showBinding: boolean | undefined = undefined
   */
  @HostBinding('class.md3-navigation-drawer--show') showBinding!: boolean;
  
  /**
   * @HostBinding displayBinding: string | undefined = undefined
   */
  @HostBinding('style.display') displayBinding!: string;

  /**
   * @HostListener onResizeListener(event: UIEvent)
   */
  @HostListener('window:resize', ['$event']) onResizeListener(event: UIEvent) {
    if (this.type == 'standard' && this.window.innerWidth < this.breakpointWidth
    ) {
      this.uiInitialType = this.type;
      this.type = 'modal';
      this.onResize.emit(this.type);
      this.close(this.type);
    } else if (this.type == 'modal' && this.uiInitialType && this.uiInitialType != this.type && this.window.innerWidth > this.breakpointWidth) {
      this.type = this.uiInitialType;
      this.show = true;
      this.onResize.emit(this.type);
      this.dynamize(this.type);
    }
  }

  /**
   * @Input type: 'modal' | 'standard' = 'standard'
   */
  @Input('type') type: 'modal' | 'standard' = 'standard';

  /**
   * @Output onResize: EventEmitter<string>
   */
  @Output('onResize') onResize: EventEmitter<string> = new EventEmitter<string>();

  /**
   * private breakpointWidth: number = 1024
   */
  private breakpointWidth: number = 1024;

  /**
   * private show: boolean | undefined = undefined
   */
  private show!: boolean;

  /**
   * private subscription: Subscription | undefined = undefined
   */
  private subscription!: Subscription;

  /**
   * private uiInitialType: string | undefined = undefined
   */
  private uiInitialType!: 'modal' | 'standard';

  /**
   * private window: Window | undefined = undefined
   */
  private window!: Window;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView as Window;
  }

  ngOnChanges(_changes: SimpleChanges): void {
    if (_changes['show'] && !_changes['show'].isFirstChange())
      this.dynamize();
  }

  ngOnInit(): void {
    NavigationDrawerTrigger.trigger = new EventEmitter();
    this.subscription = NavigationDrawerTrigger.trigger.subscribe(() => {
      this.show = true;
      this.dynamize();
    });

    if (this.type == 'standard' && this.window.innerWidth < this.breakpointWidth) {
      this.uiInitialType = this.type;
      this.type = 'modal';
      this.onResize.emit(this.type);
    }
    
    this.dynamize(this.type);
  }

  ngAfterContentInit(): void {
    this.navigationDrawerButtons.forEach(_navigationDrawerButton => {
      _navigationDrawerButton.onClick.subscribe(() => {
        if (this.type == 'modal')
          this.close();
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  public close(_type?: string): void {
    this.show = false;
    this.dynamize(_type);
  }

  private dynamize(_type?: string): void {
    if (_type)
      this.typeBinding = this.type;

    if (this.typeBinding == 'modal') {
      if (this.show) {
        this.displayBinding = 'block';
        
        setTimeout(() => {
          this.showBinding = true;
        }, 10);
      } else {
        this.showBinding = false;
  
        setTimeout(() => {
          this.displayBinding = 'none';
        }, 300);
      }
    } else {
      this.displayBinding = 'block';
    }
  }

}
