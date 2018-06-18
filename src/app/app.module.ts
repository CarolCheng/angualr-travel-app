import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Angular Material 6.2.1
import {
  MatTabsModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatPaginatorModule,
  MatChipsModule,
  MatSidenavModule,
  MatDividerModule,
  MatSelectModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatButtonModule,
  MatListModule } from '@angular/material';



import { AppComponent } from './app.component';
import { TWSpotService } from './service/twspot.service';
import { SpotCardComponent } from './spotcard/spotcard.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { SpotDetailsComponent } from './spot-details/spot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotCardComponent,
    PageNotFoundComponent,
    SpotDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatTabsModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [
    TWSpotService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
