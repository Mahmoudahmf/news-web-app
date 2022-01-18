import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../getservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service: GetserviceService) { }
  homeArray: any = []
  ngOnInit(): void {
    this._service.getHomeData().subscribe((data) => {
      console.log(data);
      this.homeArray = data.articles

    })
  }

}
