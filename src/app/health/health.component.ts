import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../getservice.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(private _http:GetserviceService) { }
healthArray:any =[]

  ngOnInit(): void {

    this._http.getHealthData().subscribe((data)=>{
      this.healthArray = data.articles
    })
  }

}
