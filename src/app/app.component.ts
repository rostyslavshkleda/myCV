import { Component } from '@angular/core';


export class Feature {
  id: number;
  name: string;
}

const FEATURES: Feature[] = [
  { id: 1, name: 'Address of living, phone number and e-mail' },
  { id: 2, name: 'Date and place of birth' },
  { id: 3, name: 'Jobs experience' },
  { id: 4, name: 'Education' },
  { id: 5, name: 'Professional skills and knowledge' },
  { id: 6, name: 'Languages knowledge' },
  { id: 7, name: 'Personal qualities' },
  { id: 8, name: 'Others' },
];

@Component({
  selector: 'app-root',
  template: `
  <img width="300" src="../assets/Ros.jpg">
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="let feature of features"
      [class.selected]="feature === selectedFeature"
      (click)="onSelect(feature)">
      <span class="badge">{{feature.id}}</span> {{feature.name}}
    </li>
  </ul>
  <div *ngIf="selectedFeature">
    <h2>{{selectedFeature.name}}</h2>
  </div>
  `
})
export class AppComponent {
  title = 'Shkleda Rostyslav Anatoliiovych';
  features = FEATURES;
  selectedFeature: Feature;
 
  onSelect(feature: Feature): void {
    this.selectedFeature = feature;
  }
}
