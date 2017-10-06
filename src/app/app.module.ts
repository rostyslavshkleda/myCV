import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FeatureDetailComponent } from './feature/feature-detail.component';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { RouterModule } from '@angular/router';
import { DateComponent } from './date/date.component';
import { JobsComponent } from './jobs/jobs.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [
    AppComponent,
    FeatureDetailComponent,
    AddressComponent,
    DateComponent,
    JobsComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent,
    QualitiesComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'date',
        component: DateComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'languages',
        component: LanguagesComponent
      },
      {
        path: 'others',
        component: OthersComponent
      },
      {
        path: 'qualities',
        component: QualitiesComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      }
    ])
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
