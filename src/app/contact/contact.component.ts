import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Form model - like having a blank form ready for visitors to fill out
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Form submission status flags
  formSubmitted = false;
  formSubmitError = false;
  
  // Method to handle form submission
  onSubmit(): void {
    // Validate form - in a real app, you'd do more thorough validation
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // In a real app, this would send data to a backend service
      console.log('Form submitted:', this.contactForm);
      
      // Show success message
      this.formSubmitted = true;
      this.formSubmitError = false;
      
      // Reset form
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      // Show error message if validation fails
      this.formSubmitError = true;
    }
  }
}