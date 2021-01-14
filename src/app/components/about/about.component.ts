import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {}

    downloadResume() {
    	var anchor=document.createElement('a');
    	anchor.setAttribute('href','assets/resume/Kartiki-Sahu_Lead-Software-Engineer_Resume.pdf');
    	anchor.setAttribute('download','');
    	document.body.appendChild(anchor);
    	anchor.click();
    	anchor.parentNode.removeChild(anchor);
  }

}
