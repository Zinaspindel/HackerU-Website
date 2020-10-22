import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopNavbarComponent } from './header/top-navbar/top-navbar.component';
import { MainNavbarComponent } from './header/main-navbar/main-navbar.component';
import { BannerComponent } from './header/banner/banner.component';
import { CourseListComponent } from './course-list/course-list.component';
import { WhyHackeruComponent } from './why-hackeru/why-hackeru.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ScrollComponent } from './scroll/scroll.component';
import { CenterPopupComponent } from './center-popup/center-popup.component';
import { BottomPopupComponent } from './bottom-popup/bottom-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopNavbarComponent,
    MainNavbarComponent,
    BannerComponent,
    CourseListComponent,
    WhyHackeruComponent,
    HowItWorksComponent,
    OurProcessComponent,
    WhatsappComponent,
    ScrollComponent,
    CenterPopupComponent,
    BottomPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
