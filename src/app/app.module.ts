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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import * as fromHomepage from './store/homepage/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomepageEffects } from './store/homepage/effects';
import { HomepageService } from './homepage.service';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './common-components/search-result/search-result.component';
import { CardResultComponent } from './common-components/card-result/card-result.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdvancedSearchComponent,
    NavbarComponent,
    SearchResultComponent,
    CardResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,

    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),

    StoreModule.forFeature(fromHomepage.homepageKey, fromHomepage.reducer),
    EffectsModule.forFeature([HomepageEffects]),
  ],
  providers: [HomepageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
