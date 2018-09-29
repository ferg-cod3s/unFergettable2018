import { Component} from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent{

  submitted = false;

  onSubmit() {
    this.submitted=true; 
    console.log('Shits submitted');

    console.log(this);
  }

}
