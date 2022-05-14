import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

// Directives Imports
import { ElevationDirective } from '../../directives/elevation.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ElevationDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    // Material Import
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatChipsModule,
    MatGridListModule
  ]
})
export class HomeModule { }
