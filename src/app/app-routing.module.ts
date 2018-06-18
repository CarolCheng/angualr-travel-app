
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SpotCardComponent } from './spotcard/spotcard.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { SpotDetailsComponent } from './spot-details/spot-details.component';

const appRoutes: Routes = [
  { path: 'spots/:id', component: SpotDetailsComponent },
  { path: 'spots', component: SpotCardComponent },
  { path: '',   redirectTo: '/spots', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
