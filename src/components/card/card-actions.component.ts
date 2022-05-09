import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'md3-card-actions',
  templateUrl: './card-actions.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'md3-card-actions'
  }
})
export class CardActionsComponent implements OnInit {
  /**
   * @Input direction: string | undefined = undefined
   */
  @Input('direction') direction!: string;

  /**
   * @HostBinding directionBinding: string | undefined = undefined
   */
  @HostBinding('attr.direction') directionBinding!: string;

  constructor() { }

  ngOnInit(): void {
    this.directionBinding = this.direction;
  }

}
