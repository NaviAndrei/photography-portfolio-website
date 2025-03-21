import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Photographer information - like the content of your biography display
  photographer = {
    name: 'Alex Johnson',
    title: 'Nature & Portrait Photographer',
    location: 'Portland, Oregon',
    bio: 'With over 10 years of experience capturing moments that matter, I specialize in landscape and portrait photography that tells a story. My work has been featured in several galleries across the Pacific Northwest.',
    specialties: ['Landscape', 'Portrait', 'Wildlife', 'Architecture'],
    equipment: ['Canon EOS R5', 'Sony Alpha A7 IV', 'Various Prime Lenses']
  };
}