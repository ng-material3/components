import {
  AfterViewInit,
  Component,
  ContentChild,
  OnInit
} from '@angular/core';
import { BottomAppBarComponent } from '../bottom-app-bar/bottom-app-bar.component';
import { ContentComponent } from '../content/content.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { NavigationRailComponent } from '../navigation-rail/navigation-rail.component';
import { TopAppBarComponent } from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'md3-coordinator-layout',
  templateUrl: './coordinator-layout.component.html',
  styleUrls: ['./coordinator-layout.component.css']
})
export class CoordinatorLayoutComponent implements OnInit, AfterViewInit {
  /**
   * @ContentChild bottomAppBarComponent: BottomAppBarComponent | null | undefined
   */
  @ContentChild(BottomAppBarComponent, { read: BottomAppBarComponent }) bottomAppBarComponent!: BottomAppBarComponent;
  
  /**
   * @ContentChild contentComponent: ContentComponent | null | undefined
   */
  @ContentChild(ContentComponent, { read: ContentComponent }) contentComponent!: ContentComponent;
  
  /**
   * @ContentChild navigationBarComponent: NavigationBarComponent | null | undefined
   */
  @ContentChild(NavigationBarComponent, { read: NavigationBarComponent }) navigationBarComponent!: NavigationBarComponent;
  
  /**
   * @ContentChild navigationRailComponent: NavigationRailComponent | null | undefined
   */
  @ContentChild(NavigationRailComponent, { read: NavigationRailComponent }) navigationRailComponent!: NavigationRailComponent;

  /**
   * @ContentChild topAppBarComponent: TopAppBarComponent | null | undefined
   */
  @ContentChild(TopAppBarComponent, { read: TopAppBarComponent }) topAppBarComponent!: TopAppBarComponent;

  /**
   * private isContentScrolledTop: boolean | null = null
   * -used to enable scrolled binding on a TopAppBarComponent
   */
  private isContentScrolledTop!: boolean;

  /**
   * private offsetBottom: number = 0
   * -used to set contentComponent --md3-content-offset-bottom css variable, from BottomAppBar or NavigationBarComponent height
   */
  private offsetBottom: number = 0;
  
  /**
   * private offsetLeft: number = 0
   * -Used to set contentComponent --md3-content-offset-left css variable, from NavigationRailComponent width
   */
  private offsetLeft: number = 0;

  /**
   * private offsetTop: number = 0
   * -used to set contentComponent --md3-content-offset-top css variable, from topBarComponent height
   */
  private offsetTop: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.contentComponent) {
      if (this.topAppBarComponent) {
        this.offsetTop = this.topAppBarComponent.element.clientHeight;
        this.contentComponent.element.style.setProperty('--md3-content-offset-top', this.offsetTop + 'px');
        
        this.contentComponent.element.addEventListener('scroll', (_event: Event) => {
          this.isContentScrolledTop = (this.contentComponent.element.scrollTop == 0 && !this.isContentScrolledTop);
          if (!this.isContentScrolledTop && !this.topAppBarComponent.scrolledBinding) {
            this.topAppBarComponent.scrolledBinding = true;
          } else if (this.isContentScrolledTop && this.isContentScrolledTop) {
            this.topAppBarComponent.scrolledBinding = false;
          }
        });
      }

      if (this.bottomAppBarComponent) {
        this.offsetBottom = this.bottomAppBarComponent.element.clientHeight;
        this.contentComponent.element.style.setProperty('--md3-content-offset-bottom', this.offsetBottom + 'px');
      }

      if (this.navigationBarComponent) {
        this.offsetBottom = this.navigationBarComponent.element.clientHeight;
        this.contentComponent.element.style.setProperty('--md3-content-offset-bottom', this.offsetBottom + 'px');
      }

      if (this.navigationRailComponent) {
        this.offsetLeft = this.navigationRailComponent.element.clientWidth;
        this.contentComponent.element.style.setProperty('--md3-content-offset-left', this.offsetLeft + 'px');
      }
    }
  }

}
