import { Component, OnInit } from '@angular/core';
import {Taxi} from "../../entities/taxi.entities";
import {TaxiService} from "../../services/taxi.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-taxis',
  templateUrl: './taxis.component.html',
  styleUrls: ['./taxis.component.css']
})
export class TaxisComponent implements OnInit {
  taxi: Taxi|null = null;
  id_taxi:number=0;


  constructor( private taxiservice : TaxiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.taxi=null;
    this.taxiservice.getTaxi(this.id_taxi).subscribe(
      {
        next : data=> this.taxi=data,
        error: err => alert("taxi introuvable")
      }
    )

  }

  onNewTaxi() {
    this.router.navigateByUrl('newTaxi');

  }
}
