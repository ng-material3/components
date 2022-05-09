<md3-card
  [orientation]="'vertical'"
  [type]="'elevated'"
  (onClick)="test()">

  <md3-card-image
    [size]="'static'"
    [slot]="'start'"
    [src]="'https://material.angular.io/assets/img/examples/shiba2.jpg'"></md3-card-image>

  <md3-card-header>

    <div>

      <md3-card-headline>Headline</md3-card-headline>

      <md3-card-subhead>Subhead</md3-card-subhead>

    </div>

  </md3-card-header>

  <md3-card-content>
    
    <span>Card inner content text.</span>

  </md3-card-content>

  <md3-card-actions
    [direction]="'end'">
    
    <md3-button
      type="outlined">Cancel</md3-button>

    <md3-button
      type="filled-tonal">Ok</md3-button>

  </md3-card-actions>

</md3-card>