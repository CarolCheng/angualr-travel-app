import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';


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
  MatCheckboxModule } from '@angular/material';



import { AppComponent } from './app.component';
import { TWSpotService } from './service/twspot.service';
import { SpotCardComponent } from './spotcard/spotcard.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotCardComponent
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
    MatCheckboxModule
  ],
  providers: [
    TWSpotService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
