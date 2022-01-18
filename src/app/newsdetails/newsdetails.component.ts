import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.scss']
})
export class NewsdetailsComponent implements OnInit {

  newsId: any
  constructor(private _Activate: ActivatedRoute) {
    console.log(this._Activate.snapshot.params?.['id']);

    this.newsId = this._Activate.snapshot.params?.['id']
  }

  ngOnInit(): void {
  }



}
