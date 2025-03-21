import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveImageService {
  
  // Return appropriate image path based on screen width
  // This is like choosing different sized frames based on wall space
  getResponsiveImagePath(basePath: string): string {
    // Pentru moment, returnăm calea originală deoarece nu avem imagini responsive
    return basePath;
    
    /* 
    // Codul original - comentat temporar 
    const screenWidth = window.innerWidth;
    const extension = basePath.substring(basePath.lastIndexOf('.'));
    
    // Extract the path without extension
    const pathWithoutExtension = basePath.substring(0, basePath.lastIndexOf('.'));
    
    // Choose image size based on screen width
    if (screenWidth <= 480) {
      // Mobile devices - small images
      return `${pathWithoutExtension}-small${extension}`;
    } else if (screenWidth <= 1024) {
      // Tablets and smaller desktops - medium images
      return `${pathWithoutExtension}-medium${extension}`;
    } else {
      // Large desktops - full size images
      return basePath;
    }    */
  }
}