import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../getservice.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor(private _http:GetserviceService) { }
techArray:any =[]
  ngOnInit(): void {
    this._http.getTichData().subscribe((data)=>{
this.techArray=data.articles
    })
  }

}
