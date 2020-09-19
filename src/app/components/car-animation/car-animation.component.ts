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
    $(window).scroll(function () {
      const cityPos = $('.city').offset().top;
      const topOfWindow = $(window).scrollTop();

      if (cityPos < topOfWindow + 850) {
        $('.city').addClass('cityAnimation');
      } else {
        $('.city').removeClass('cityAnimation');
      }
    });
  }

}
