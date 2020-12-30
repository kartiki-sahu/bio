import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-technical-journey',
  templateUrl: './technical-journey.component.html',
  styleUrls: ['./technical-journey.component.scss']
})
export class TechnicalJourneyComponent implements OnInit {

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
