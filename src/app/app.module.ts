import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearPostComponent } from './posts/crear-post/crear-post.component';
import { ActualizarPostComponent } from './posts/actualizar-post/actualizar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    HelloWorldComponent,
    CrearPostComponent,
    ActualizarPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
