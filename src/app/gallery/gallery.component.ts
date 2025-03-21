import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { ResponsiveImageService } from '../services/responsive-image.service';
import { Photo } from '../models/photo.interface';
import { fadeAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [CommonModule, RouterModule],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class GalleryComponent implements OnInit {
  // Properties to store photos and categories
  photos: Photo[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all'; // Default to showing all photos

  // Track window resize events to update images
  @HostListener('window:resize')
  onResize() {
    // Refresh photo URLs when window is resized
    this.photos = this.photos.map(photo => ({
      ...photo,
      responsiveUrl: this.responsiveImageService.getResponsiveImagePath(photo.url)
    }));
  }

  // Inject the photo service
  constructor(
    private photoService: PhotoService,
    private responsiveImageService: ResponsiveImageService // Inject the new service
  ) {}

  // Initialize component when it loads
  ngOnInit(): void {
    // Get all photos from the service
    this.photos = this.photoService.getAllPhotos();
    // Add responsive URLs to each photo
    this.photos = this.photos.map(photo => ({
      ...photo,
      responsiveUrl: this.responsiveImageService.getResponsiveImagePath(photo.url)
    }));  
    // Get all categories from the service
    this.categories = this.photoService.getCategories();
  }

  // Method to filter photos by category
  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  // Computed property to get filtered photos based on selected category
  get filteredPhotos(): Photo[] {
    if (this.selectedCategory === 'all') {
      return this.photos;
    }
    return this.photos.filter(photo => photo.category === this.selectedCategory);
  }
}