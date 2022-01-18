import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../getservice.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  constructor(private _http: GetserviceService) { }
  sportArray: any = []
  ngOnInit(): void {
    this._http.getSportData().subscribe((data) => {
      this.sportArray = data.articles
    })
  }

}
