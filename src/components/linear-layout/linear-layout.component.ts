import {
  Component,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'md3-linear-layout',
  templateUrl: './linear-layout.component.html',
  styleUrls: ['./linear-layout.component.css']
})
export class LinearLayoutComponent implements OnInit {
  /**
   * @HostBinding orientationBinding: string | undefined = undefined
   */
  @HostBinding('attr.orientation') orientationBinding!: string;

  /**
   * @Input orientation: 'vertical' | 'horizontal' = 'horizontal'
   */
  @Input('orientation') orientation: 'vertical' | 'horizontal' = 'horizontal';

  constructor() { }

  ngOnInit(): void {
    this.orientationBinding = this.orientation;
  }

}
