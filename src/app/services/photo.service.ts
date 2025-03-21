import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'  // This makes the service available throughout the app
})
export class PhotoService {
  // Sample photo data - in a real app, this would come from a database
  private photos: Photo[] = [
    {
      id: 1,
      title: 'Mountain Sunrise',
      url: 'assets/images/photo1.webp',
      responsiveUrl: 'assets/images/photo1.webp',
      category: 'landscape',
      description: 'A beautiful sunrise over mountain peaks, capturing the first light of day.',
      dateTaken: '2023-06-15',
      featured: true
    },
    {
      id: 2,
      title: 'Urban Portrait',
      url: 'assets/images/photo2.webp',
      responsiveUrl: 'assets/images/photo2.webp',
      category: 'portrait',
      description: 'Street portrait capturing urban life and emotion.',
      dateTaken: '2023-07-22',
      featured: false
    },
    {
      id: 3,
      title: 'Ocean Waves',
      url: 'assets/images/photo3.webp',
      responsiveUrl: 'assets/images/photo3.webp',
      category: 'landscape',
      description: 'Powerful ocean waves crashing against the shore at sunset.',
      dateTaken: '2023-05-30',
      featured: true
    },
    {
      id: 4,
      title: 'Autumn Forest',
      url: 'assets/images/photo4.webp',
      responsiveUrl: 'assets/images/photo4.webp',
      category: 'landscape',
      description: 'Colorful autumn forest with golden leaves and morning mist.',
      dateTaken: '2023-09-18',
      featured: true
    },
    {
      id: 5,
      title: 'Street Life',
      url: 'assets/images/photo5.webp',
      responsiveUrl: 'assets/images/photo5.webp',
      category: 'street',
      description: 'Candid moment capturing the essence of daily urban life.',
      dateTaken: '2023-08-05',
      featured: false
    },
    {
      id: 6,
      title: 'Wildlife Close-up',
      url: 'assets/images/photo6.webp',
      responsiveUrl: 'assets/images/photo6.webp',
      category: 'wildlife',
      description: 'Detailed close-up of a wild fox in its natural habitat.',
      dateTaken: '2023-07-12',
      featured: true
    },
    {
      id: 7,
      title: 'Architectural Detail',
      url: 'assets/images/photo7.webp',
      responsiveUrl: 'assets/images/photo7.webp',
      category: 'architecture',
      description: 'Geometric patterns and lines of modern architecture.',
      dateTaken: '2023-10-03',
      featured: false
    },
    {
      id: 8,
      title: 'Night Sky',
      url: 'assets/images/photo8.webp',
      responsiveUrl: 'assets/images/photo8.webp',
      category: 'astrophotography',
      description: 'Milky Way galaxy visible over a calm mountain lake.',
      dateTaken: '2023-08-15',
      featured: false
    },
    {
      id: 9,
      title: 'Macro Flower',
      url: 'assets/images/photo9.webp',
      responsiveUrl: 'assets/images/photo9.webp',
      category: 'macro',
      description: 'Extreme close-up of a delicate flower revealing intricate details.',
      dateTaken: '2023-06-22',
      featured: true
    },
    {
      id: 10,
      title: 'Coastal Sunset',
      url: 'assets/images/photo10.webp',
      responsiveUrl: 'assets/images/photo10.webp',
      category: 'landscape',
      description: 'Dramatic sunset over a rocky coastline with vibrant colors.',
      dateTaken: '2023-07-30',
      featured: false
    },
    {
      id: 11,
      title: 'City Skyline',
      url: 'assets/images/photo11.webp',
      responsiveUrl: 'assets/images/photo11.webp',
      category: 'cityscape',
      description: 'Panoramic view of a modern city skyline at blue hour.',
      dateTaken: '2023-09-05',
      featured: false
    },
    {
      id: 12,
      title: 'Cultural Portrait',
      url: 'assets/images/photo12.webp',
      responsiveUrl: 'assets/images/photo12.webp',
      category: 'portrait',
      description: 'Portrait showcasing traditional cultural attire and heritage.',
      dateTaken: '2023-08-12',
      featured: false
    }
    ,
    {
      id: 13,
      title: 'Mountain Mist',
      url: 'assets/images/photo13.webp',
      responsiveUrl: 'assets/images/photo13.webp',
      category: 'landscape',
      description: 'Mountain landscape shrouded in early morning mist, creating a mystical atmosphere.',
      dateTaken: '2023-10-05',
      featured: false
    },
    {
      id: 14,
      title: 'Urban Architecture',
      url: 'assets/images/photo14.webp',
      responsiveUrl: 'assets/images/photo14.webp',
      category: 'cityscape',
      description: 'Modern architectural details contrasting with historical elements in the city center.',
      dateTaken: '2023-09-18',
      featured: false
    },
    {
      id: 15,
      title: 'Dew Drops',
      url: 'assets/images/photo15.webp',
      responsiveUrl: 'assets/images/photo15.webp',
      category: 'macro',
      description: 'Dew drops on a spider web capturing the morning light.',
      dateTaken: '2023-07-12',
      featured: true
    },
    {
      id: 16,
      title: 'Street Portrait',
      url: 'assets/images/photo16.webp',
      responsiveUrl: 'assets/images/photo16.webp',
      category: 'portrait',
      description: 'Candid portrait of a street performer playing guitar.',
      dateTaken: '2023-08-29',
      featured: true
    },
    {
      id: 17,
      title: 'Northern Lights',
      url: 'assets/images/photo17.webp',
      responsiveUrl: 'assets/images/photo17.webp',
      category: 'astrophotography',
      description: 'Spectacular aurora borealis dancing across the Arctic night sky.',
      dateTaken: '2023-11-02',
      featured: true
    },
    {
      id: 18,
      title: 'Wildlife',
      url: 'assets/images/photo18.webp',
      responsiveUrl: 'assets/images/photo18.webp',
      category: 'wildlife',
      description: 'White-tailed eagle captured in the moment of hunting above a lake.',
      dateTaken: '2023-06-30',
      featured: false
    },
    {
      id: 19,
      title: 'Nocturnal Reflections',
      url: 'assets/images/photo19.webp',
      responsiveUrl: 'assets/images/photo19.webp',
      category: 'street',
      description: 'Rain-slicked streets reflect neon lights in a vibrant nighttime cityscape',
      dateTaken: '2023-10-22',
      featured: false
    },
    {
      id: 20,
      title: 'Festival Lights',
      url: 'assets/images/photo20.jpeg',
      responsiveUrl: 'assets/images/photo20.jpeg',
      category: 'cityscape',
      description: 'Urban panorama during a light festival, reflected in the waters of a river.',
      dateTaken: '2023-12-01',
      featured: false
    }
  ];

  // Method to get all photos
  getAllPhotos(): Photo[] {
    return this.photos;
  }

  // Method to get featured photos
  getFeaturedPhotos(): Photo[] {
    return this.photos.filter(photo => photo.featured);
  }

  // Method to get a specific photo by ID
  getPhotoById(id: number): Photo | undefined {
    return this.photos.find(photo => photo.id === id);
  }

  // Method to toggle featured status
  toggleFeatured(id: number): void {
    const photo = this.getPhotoById(id);
    if (photo) {
      photo.featured = !photo.featured;
    }
  }

  // Method to get unique categories from the photos
  getCategories(): string[] {
    // Create a Set to automatically eliminate duplicates
    const categoriesSet = new Set(this.photos.map(photo => photo.category));
    // Convert the Set back to an array
    return Array.from(categoriesSet);
  }
}