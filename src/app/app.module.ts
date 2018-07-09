import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
