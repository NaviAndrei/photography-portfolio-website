import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Featured photos for the homepage
  featuredPhotos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    // Get featured photos from service
    this.featuredPhotos = this.photoService.getFeaturedPhotos();
    
    // Fallback: if no featured photos, show first 3
    if (this.featuredPhotos.length === 0) {
      this.featuredPhotos = this.photoService.getAllPhotos().slice(0, 3);
    }
  }
}