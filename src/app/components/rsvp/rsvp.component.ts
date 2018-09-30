import { Component} from '@angular/core';

import { RsvpService } from './rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  providers: [ RsvpService ],
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent{

  constructor (private rsvpService: RsvpService) { }

  submitted = false;

  onSubmit() {
    this.submitted=true; 
    console.log('Shits submitted');

    
    //this.rsvpService.post(e);
  }

}
