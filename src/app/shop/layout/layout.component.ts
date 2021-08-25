import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router : Router) { 
    this.router.events.subscribe((path) => {{
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
  }

}
