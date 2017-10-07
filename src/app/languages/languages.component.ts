import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService } from '../http.service';
import { General } from '../general';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  providers: [HttpService]
})
export class LanguagesComponent implements OnInit {

  general: General;

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe((data: Response) => this.general=data.json());
  }
}
