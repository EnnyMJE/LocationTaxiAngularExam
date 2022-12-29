import {Component, Input, OnInit} from '@angular/core';
import { Location} from "../../entities/location.entities";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.css']
})
export class EditlocationComponent implements OnInit {
  locationFormGroup?: FormGroup;
  submitted=false;
  @Input() location?: Location;
  deleted = false;

  constructor(private locationService: LocationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locationFormGroup = this.fb.group({
      id: [this.location?.id],
      dateloc: [this.location?.dateloc, [Validators.required]],
      kmtotal: [this.location?.kmtotal, [Validators.required]],
      cout: [this.location?.cout, [Validators.required]]
    })
  }

  onUpdateLocation(): void {
    this.submitted = true;
    if (this.locationFormGroup?.invalid){
      return;
    }
    let locationmaj: Location = this.locationFormGroup?.value;
    if (this.location){
      locationmaj.client = this.location.client;
      this.locationService.updateLocation(locationmaj).subscribe({
        next: data=> alert('maj ok'),
        error: err=> alert(err.headers.get("error"))
      })
    }

  }

  onDeleteLocation() {
    let v = confirm('êtes vous sûr de vouloir supprimer? ');
    if (v){
      this.locationService.deleteLocation(this.locationFormGroup?.value).subscribe(data=>{
        alert('effacement à été effectuée');
        this.deleted = true;
      },
        err=> {
        alert(err.headers.get("error"));
        });
    }

  }
}
