import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { BookingComponent } from './modules/booking/booking.component';
import { AccomodationComponent } from './modules/accomodation/accomodation.component';
import { FacilitiesComponent } from './modules/facilities/facilities.component';
import { AboutComponent } from './modules/about/about.component';
import { TestimonialComponent } from './modules/testimonial/testimonial.component';
import { HeaderComponent } from './modules/header/header.component';
import { BannerComponent } from './modules/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BookingComponent,
    AccomodationComponent,
    FacilitiesComponent,
    AboutComponent,
    TestimonialComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
