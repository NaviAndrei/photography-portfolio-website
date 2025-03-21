import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.interface';
import { fadeAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class PhotoDetailComponent implements OnInit {
  // Property to store the current photo
  photo: Photo | undefined;
  
  // Inject the route service to get URL parameters and the photo service
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  // Initialize component when it loads
  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      // Get the 'id' parameter from the URL
      const idParam = params.get('id');
      if (idParam) {
        // Convert string ID to number
        const id = +idParam;
        // Get the photo with this ID from the service
        this.photo = this.photoService.getPhotoById(id);
      }
    });
  }
  
  // Navigate back to gallery
  goBack(): void {
    window.history.back();
  }
}