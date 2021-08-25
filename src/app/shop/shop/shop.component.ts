import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private activroute :ActivatedRoute,public router : Router) { 
    this.router.events.subscribe((path) => {{
      window.scrollTo(0, 0);
    }
  });
  }

  ngOnInit(): void {
    console.log(this.activroute)
  }

}
