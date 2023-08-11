import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  contactData = {
    name: 'Social Media',
    email: 'socialmedia@example.com',
    phone: '+1234567890',
    address: '123 Main Street, City'
  };
}
