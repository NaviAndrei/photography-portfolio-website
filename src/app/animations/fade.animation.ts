import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  // Entering a view (like walking into a new gallery room)
  transition(':enter', [
    style({ opacity: 0 }),  // Start fully transparent
    animate('400ms ease-in', style({ opacity: 1 }))  // Fade in over 400ms
  ]),
  
  // Leaving a view (like exiting a gallery room)
  transition(':leave', [
    style({ opacity: 1 }),  // Start fully visible
    animate('400ms ease-out', style({ opacity: 0 }))  // Fade out over 400ms
  ])
]);