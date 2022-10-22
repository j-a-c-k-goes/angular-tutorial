import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // NgModel here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { XyzComponent } from './xyz/xyz.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule,
    // Remove when actual server being used
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    XyzComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
