import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService } from '../http.service';
import { General } from '../general';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [HttpService]
})
export class EducationComponent implements OnInit {

  general: General;

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe((data: Response) => this.general=data.json());
  }
}
