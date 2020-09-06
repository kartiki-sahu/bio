import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-car-animation',
  templateUrl: './car-animation.component.html',
  styleUrls: ['./car-animation.component.css']
})
export class CarAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function() {
      const highwayPos = $('.highway').offset().top;
      const cityPos = $('.city').offset().top;
      const topOfWindow = $(window).scrollTop();
      if (highwayPos < topOfWindow + 800) {
        $('.highway').addClass('highwayAnimation');
      } else {
        $('.highway').removeClass('highwayAnimation');
      }

      if (cityPos < topOfWindow + 700) {
        $('.city').addClass('cityAnimation');
      } else {
        $('.city').removeClass('cityAnimation');
      }
      });
  }

}
