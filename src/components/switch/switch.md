<md3-switch
  [direction]="'start'"
  [(ngModel)]="switchValue">Label</md3-switch>

<md3-switch
  [direction]="'start'"
  [checked]="switchValue"
  [value]="mayonnaise"
  (onChange)="test($event)">Label</md3-switch>