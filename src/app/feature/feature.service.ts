import { Injectable } from '@angular/core';
import { Feature } from './feature';
import { FEATURES } from './mock-features';

@Injectable()
export class FeatureService {
  getFeatures(): Promise<Feature[]> {
    return Promise.resolve(FEATURES);
  }
}
