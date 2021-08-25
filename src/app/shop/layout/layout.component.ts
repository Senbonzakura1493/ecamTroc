import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { ShopService } from '../shop/shop.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router : Router, private shopService :ShopService ) { 
    this.router.events.subscribe((path) => {{
        window.scrollTo(0, 0);
      }
    });

    this.shopService.APIgetCourses().subscribe(data=>{
      console.log(data.body);
      this.shopService.coursesSubject.next(data.body.courses)
    })
    this.shopService.APIgetSchoolyears().subscribe(data=>{
      console.log(data.body);
      this.shopService.schoolyearsSubject.next(data.body.schoolyears)
    })
  }

  ngOnInit(): void {
  }

}
