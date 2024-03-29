import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from './components/clients/clients.component';
import {LocationsComponent} from './components/locations/locations.component';
import {AdressesComponent} from './components/adresses/adresses.component';
import {InfosComponent} from './components/infos/infos.component';
import {TaxisComponent} from './components/taxis/taxis.component';
import {HomeComponent} from './components/home/home.component';
import {NewclientComponent} from "./components/newclient/newclient.component";
import {EditclientComponent} from "./components/editclient/editclient.component";
import {NewadresseComponent} from "./components/newadresse/newadresse.component";
import {EditadresseComponent} from "./components/editadresse/editadresse.component";
import {NewtaxiComponent} from "./components/newtaxi/newtaxi.component";
import {ExamenComponent} from "./components/examen/examen.component";
const routes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'adresses', component: AdressesComponent},
  {path: 'infos', component: InfosComponent},
  {path: 'taxis', component: TaxisComponent},
  {path: '', component: HomeComponent},
  {path: 'newClient', component: NewclientComponent},
  {path: 'editClient/:id_client', component: EditclientComponent},
  {path: 'newAdresse', component: NewadresseComponent},
  {path: 'editAdresse/:id_adresse', component: EditadresseComponent},
  {path: 'newTaxi', component: NewtaxiComponent},
  {path: 'examen', component: ExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
