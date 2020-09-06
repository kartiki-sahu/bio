import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, state } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'project-journey',
  templateUrl: './project-journey.component.html',
  styleUrls: ['./project-journey.component.scss'],
})
export class ProjectJourneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(window).scroll(function() {
    //   $('.project-milestone').each(function() {
    //     const imagePos = $(this).offset().top;
    //     const topOfWindow = $(window).scrollTop();
    //     if (imagePos < topOfWindow + 300) {
    //       $('#project-milestone-1').addClass('slideRight');
    //       setTimeout(() => {
    //         $('#project-milestone-1').addClass('move-away-leftward');
    //       }, 1200);

    //       setTimeout(() => {
    //         $('#project-milestone-2').addClass('slideLeft');
    //       }, 2800)

    //       setTimeout(() => {
    //         $('#project-milestone-2').addClass('move-away-rightward');
    //       }, 4000);

    //       setTimeout(() => {
    //         $('#project-milestone-3').addClass('slideRight');
    //       }, 4800);

    //       setTimeout(() => {
    //         $('#project-milestone-3').addClass('move-away-leftward-1');
    //       }, 6000);

    //       setTimeout(() => {
    //         $('#project-milestone-4').addClass('slideLeft');
    //       }, 6800)

    //       setTimeout(() => {
    //         $('#project-milestone-4').addClass('move-away-rightward-1');
    //       }, 8000);

    //       setTimeout(() => {
    //         $('#project-milestone-5').addClass('slideRight');
    //       }, 8800);

    //       setTimeout(() => {
    //         $('#project-milestone-5').addClass('move-away-leftward-2');
    //       }, 10000);

    //       setTimeout(() => {
    //         $('#project-milestone-6').addClass('slideLeft');
    //       }, 10800)

    //       setTimeout(() => {
    //         $('#project-milestone-6').addClass('move-away-rightward-2');
    //       }, 12000);

    //       setTimeout(() => {
    //         $('#project-milestone-7').addClass('slideRight');
    //       }, 12800)

    //       setTimeout(() => {
    //         $('#project-milestone-7').addClass('move-away-leftward-3');
    //       }, 12800);
    //     }
    //   });
    // });
  }
}
