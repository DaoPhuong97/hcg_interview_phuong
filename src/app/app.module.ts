import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdvancedSearchComponent } from './pages/advanced-search/advanced-search.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';

import * as fromHomepage from './store/homepage/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomepageEffects } from './store/homepage/effects';
import { HomepageService } from './homepage.service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdvancedSearchComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    StoreModule.forRoot(fromHomepage.reducer),
    EffectsModule.forRoot([HomepageEffects]),
  ],
  providers: [HomepageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
