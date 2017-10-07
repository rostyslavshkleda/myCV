import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService } from '../http.service';
import { General } from '../general';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css'],
  providers: [HttpService]
})
export class OthersComponent implements OnInit {

  general: General;

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe((data: Response) => this.general=data.json());
  }
}
