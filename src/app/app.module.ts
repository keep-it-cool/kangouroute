import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSchool } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SchoolMapComponent } from './school-map/school-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolMapComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee,faSchool);
  }
}
