<md3-text-field
  [clearable]="true"
  [fullwidth]="true"
  [label]="'Label'"
  [placeholder]="'Type something'"
  [value]="textFieldValue"
  (onChange)="test($event)"></md3-text-field>

<md3-text-field
  [clearable]="true"
  [fullwidth]="true"
  [label]="'Label'"
  [placeholder]="'Type something'"
  [(ngModel)]="textFieldValue"></md3-text-field>