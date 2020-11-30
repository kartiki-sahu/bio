import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  selectedIndex = 0;
  cellCount = 9;
  @ViewChild('carousel') carousel: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  prevSlide() {
    this.selectedIndex--;
    this.rotateCarousel();
  }

  nextSlide() {
    this.selectedIndex++;
    this.rotateCarousel();
  }

  rotateCarousel() {
    const angle = this.selectedIndex / this.cellCount * -360;
    this.carousel.nativeElement.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  }

}
