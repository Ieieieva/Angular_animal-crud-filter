import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FilterAnimalSwitchComponent } from './components/filter-animal-switch/filter-animal-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalFormComponent,
    FilterAnimalSwitchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
