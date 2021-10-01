import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomepageComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../../assets/Banner 1.jpg','../../assets/Banner 2.jpg','../../assets/Banner 3.jpg'];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  }

}
