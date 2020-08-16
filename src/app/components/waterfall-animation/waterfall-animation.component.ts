import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
    selector: 'waterfall-animation',
    templateUrl:'./waterfall-animation.component.html',
    styleUrls:['./waterfall-animation.component.scss']
})
export class WaterfallAnimationComponent implements AfterViewInit{
    @ViewChild('waterfallContainer') waterfall : ElementRef;

    ngAfterViewInit(){
        const script = document.createElement("script");
        script.src = "assets/js/waterfall.js"
        document.head.appendChild(script)
    }
    
}