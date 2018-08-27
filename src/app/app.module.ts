import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { FooterSectionComponent } from './components/footersection/footersection.component';
import { LocationComponent } from './components/location/location.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegistryComponent } from './components/registry/registry.component';
import { SlideShowComponent } from './components/slideshow/slideshow.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'location', component: LocationComponent, },
    { path: 'gallery', component: GalleryComponent, },
    { path: 'registry', component: RegistryComponent, },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot(
    appRoutes,
    // { enableTracing: true }, // <-- Debugging purposes only
    )
  ],
  exports: [ ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    SlideShowComponent,
    PreloaderComponent,
    FooterSectionComponent,
    LocationComponent,
    GalleryComponent,
    RegistryComponent,
    RsvpComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
