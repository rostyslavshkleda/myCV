import { Component, Input } from '@angular/core';
import { Feature } from './feature';
@Component({
  selector: 'feature-detail',
  template: `<div *ngIf="feature">
    <h2>{{feature.name | uppercase}}</h2>
     </div>
     <router-outlet></router-outlet>
     `
})
export class FeatureDetailComponent {
  @Input() feature: Feature;
}
