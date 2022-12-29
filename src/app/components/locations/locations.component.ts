import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../services/location.service";
import {Location} from "../../entities/location.entities";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  location: Location|null = null;
  id:number=0;
  constructor(private locationservice : LocationService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.location=null;
    this.locationservice.search(this.id).subscribe(
      {
        next : data=> this.location=data,
        error: err => alert("location introuvable")
      }
    )
  }

}
