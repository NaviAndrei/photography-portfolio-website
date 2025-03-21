import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           // Main entrance/lobby
  { path: 'gallery', component: GalleryComponent }, // Exhibition hall
  { path: 'photo/:id', component: PhotoDetailComponent }, // Individual artwork room
  { path: 'about', component: AboutComponent },     // Artist biography room
  { path: 'contact', component: ContactComponent }, // Information desk
  { path: '**', redirectTo: '' }                    // "Lost? Return to lobby" sign
];