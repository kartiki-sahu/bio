import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // js_onSuccess() {
  //   // remove this to avoid redirect
  //   window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
  // }

  // js_onError(error) {
  //   // remove this to avoid redirect
  //   window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
  // }

}
