import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { PhotoFormComponent } from './componentes/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './componentes/photo-preview/photo-preview.component';
import { PhotoListComponent } from './componentes/photo-list/photo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
