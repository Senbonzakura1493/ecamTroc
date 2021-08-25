import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  constructor(private activroute :ActivatedRoute) { 
    console.log(this.activroute)
  }

  ngOnInit(): void {
  }

}
