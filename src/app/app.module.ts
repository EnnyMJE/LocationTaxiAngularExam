import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AdressesComponent } from './components/adresses/adresses.component';
import { InfosComponent } from './components/infos/infos.component';
import { TaxisComponent } from './components/taxis/taxis.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewclientComponent } from './components/newclient/newclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NewlocationComponent } from './components/newlocation/newlocation.component';
import { EditlocationComponent } from './components/editlocation/editlocation.component';
import { NewadresseComponent } from './components/newadresse/newadresse.component';
import { EditadresseComponent } from './components/editadresse/editadresse.component';
import { EdittaxiComponent } from './components/edittaxi/edittaxi.component';
import { NewtaxiComponent } from './components/newtaxi/newtaxi.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    ClientsComponent,
    LocationsComponent,
    AdressesComponent,
    InfosComponent,
    TaxisComponent,
    NewclientComponent,
    EditclientComponent,
    NewlocationComponent,
    EditlocationComponent,
    NewadresseComponent,
    EditadresseComponent,
    EdittaxiComponent,
    NewtaxiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
