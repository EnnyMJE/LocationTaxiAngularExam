import { Component, OnInit } from '@angular/core';
import {Location} from "../../entities/location.entities";
import {LocationService} from "../../services/location.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  locations?: Location[];
  constructor(private locationService: LocationService, private router: Router) {}


  ngOnInit(): void {
  }

  onSearch(value: any) {
    this.locationService.searchcout(value.cout).subscribe(
      {
        next: data =>{this.locations = data;
        }
      });
  }
}
