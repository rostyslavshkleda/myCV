import {Component, OnInit} from '@angular/core';
import { FeatureService } from './feature/feature.service';

export class Feature {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
  <img width="300" src="../assets/Ros.png">
  <h1><strong>{{title}}</strong></h1>
  </div>
  <div clas="row">
    <div class ="col-sm-4">
      <ul>
          <li *ngFor="let feature of features"
            [class.selected]="feature === selectedFeature"
            (click)="onSelect(feature)">
            <button class="btn btn-info btn-block"><h4><span class="badge">{{feature.id}}</span> <a routerLink='/{{feature.name}}'>{{feature.name | uppercase}}</a></h4></button>
         </li>
        </ul>
      </div>
    <div class ="col-sm-8 lavender rad">
      <feature-detail [feature]="selectedFeature"></feature-detail>
     </div>
  </div>
  
  
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

