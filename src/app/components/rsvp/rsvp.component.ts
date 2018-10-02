import { Component, OnInit } from '@angular/core';

import { RsvpService } from './rsvp.service';

import { RSVP } from './rsvp';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  providers: [ RsvpService ],
  styleUrls: [ './rsvp.component.css' ]
})
export class RsvpComponent{

  constructor (private rsvpService: RsvpService) { }

  rsvpModel = new RSVP ("name", "email", "?", "0");

  submitted = false;

  onSubmit() {
    this.submitted=true; 
    
    console.log(this.rsvpModel);
    
    this.rsvpService.submitToForms(this.rsvpModel).subscribe(result => {
      console.log (result);
    });
  }

}
