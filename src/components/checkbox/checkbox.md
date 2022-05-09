<md3-checkbox
  [checked]="true"
  [id]="'checkbox-ketchup'"
  [name]="'sauces'"
  [value]="'ketchup'"
  (onChange)="onChange($event)">Ketchup</md3-checkbox>

<md3-checkbox
  [id]="'checkbox-mayonnaise'"
  [name]="'sauces'"
  [value]="'mayonnaise'"
  [(ngModel)]="mayonnaiseChoice">Mayonnaise</md3-checkbox>