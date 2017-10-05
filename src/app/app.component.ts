import {Component, OnInit} from '@angular/core';
import { FeatureService } from './feature/feature.service';

export class Feature {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <img width="300" src="../assets/Ros.jpg">
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="let feature of features"
      [class.selected]="feature === selectedFeature"
      (click)="onSelect(feature)">
      <button class="btn"><h1><span class="badge">{{feature.id}}</span> <a routerLink='/{{feature.name}}'>{{feature.name | uppercase}}</a></h1></button>
    </li>
  </ul>
  <feature-detail [feature]="selectedFeature"></feature-detail>
  
  
  `,
  providers: [FeatureService]
})
export class AppComponent implements OnInit {
  title = 'Shkleda Rostyslav Anatoliiovych';
  features: Feature[];
    selectedFeature: Feature;

  constructor(private featureService: FeatureService) { }

  getFeatures(): void {
    this.featureService.getFeatures().then(features => this.features = features);
  }

  ngOnInit(): void {
    this.getFeatures();
  }


  onSelect(feature: Feature): void {
    this.selectedFeature = feature;
  }

}
