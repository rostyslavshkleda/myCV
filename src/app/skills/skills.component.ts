import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService } from '../http.service';
import { General } from '../general';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [HttpService]
})
export class SkillsComponent implements OnInit {

  general: General;

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe((data: Response) => this.general=data.json());
  }
}
