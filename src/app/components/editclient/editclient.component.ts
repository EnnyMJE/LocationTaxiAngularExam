import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../services/clients.service";
import {ActivatedRoute} from "@angular/router";
import {LocationService} from "../../services/location.service";
import {Location} from "../../entities/location.entities";

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  clientFormGroup?: FormGroup;
  submitted = false;
  id_Client: number;
  locations?: Location[];


  constructor(private clientService: ClientsService, private locationService: LocationService, private fb:FormBuilder,
              activatedRoute : ActivatedRoute) {
    this.id_Client=activatedRoute.snapshot.params.id_client;
  }

  ngOnInit(): void {
    this.clientService.getClient(this.id_Client).subscribe(
      client => {this.clientFormGroup = this.fb.group({
        id_client: [client.id_client, Validators.required],
        mail: [client.mail, Validators.required],
        nom: [client.nom, Validators.required],
        prenom: [client.prenom, Validators.required],
        tel: [client.tel, Validators.required]
      })
      });
  }

  onUpdateClient(): void{
    this.submitted = true;
    if (this.clientFormGroup?.invalid)return;

    this.clientService.updateClient(this.clientFormGroup?.value).subscribe(
      data=> {alert('maj ok')},
      err=>{
        alert(err.headers.get("error"));
      });
  }

  onShowLocClient() {
    this.locationService.getLocationsClient(this.id_Client).subscribe({
      next : data => this.locations = data,
      error : err => alert("erreur de recherche de locations")
    })
  }

  onSeeLocations(){
    this.locationService.getLocationsClient(this.id_Client).subscribe(
      data=> {this.locations=data},
      err=> {
        alert(err.headers.get("error"));
      }
    )
  }


  onAddLocation(loc: Location) {
    this.locations?.push(loc);

  }
}
