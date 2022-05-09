<md3-radio-group
  [value]="'mayonnaise'">

  <md3-radio-button
    [id]="'radio-button-ketchup'"
    [name]="'radio-button-ketchup'"
    [value]="'ketchup'">Ketchup</md3-radio-button>

  <md3-radio-button
    [id]="'radio-button-mayonnaise'"
    [name]="'radio-button-mayonnaise'"
    [value]="'mayonnaise'">Mayonnaise</md3-radio-button>

</md3-radio-group>

<md3-radio-group
  [(ngModel)]="radioValue">

  <md3-radio-button
    [direction]="'start'"
    [id]="'radio-button-ketchup'"
    [name]="'sauce'"
    [value]="'ketchup'">Ketchup</md3-radio-button>

  <md3-radio-button
    [direction]="'start'"
    [id]="'radio-button-mayonnaise'"
    [name]="'sauce'"
    [value]="'mayonnaise'">Mayonnaise</md3-radio-button>

</md3-radio-group>