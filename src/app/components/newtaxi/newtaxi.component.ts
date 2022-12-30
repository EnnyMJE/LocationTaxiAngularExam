import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaxiService} from "../../services/taxi.service";

@Component({
  selector: 'app-newtaxi',
  templateUrl: './newtaxi.component.html',
  styleUrls: ['./newtaxi.component.css']
})
export class NewtaxiComponent implements OnInit {
  taxiFormGroup?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private taxiService: TaxiService) { }

  ngOnInit(): void {
    this.taxiFormGroup = this.fb.group({
      immatriculation: ['', Validators.required],
      nbr_max_passagers: ['', Validators.required],
      prixkm: ['', Validators.required]
    });
  }

  onSaveTaxi(){
    this.submitted=true;
    if (this.taxiFormGroup?.invalid) return;
    this.taxiService.save(this.taxiFormGroup?.value).subscribe({
      next: data=>{alert('sauvegarde ok'), alert("no du taxi = "+data.id_taxi)},
      error: err=> alert(err.headers.get("error"))
    });
  }

}
