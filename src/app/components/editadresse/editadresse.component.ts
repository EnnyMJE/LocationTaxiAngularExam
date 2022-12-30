import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdressesService} from "../../services/adresse.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editadresse',
  templateUrl: './editadresse.component.html',
  styleUrls: ['./editadresse.component.css']
})
export class EditadresseComponent implements OnInit {
  adresseFormGroup?: FormGroup;
  submitted = false;
  id_adresse: number;


  constructor(private adresseService: AdressesService, private fb: FormBuilder,
              activatedRoute: ActivatedRoute) {
    this.id_adresse=activatedRoute.snapshot.params.id_adresse;
  }

  ngOnInit(): void {
    this.adresseService.getAdresse(this.id_adresse).subscribe(
      adresse=> {this.adresseFormGroup = this.fb.group({
        id_adresse: [adresse.id_adresse, Validators.required],
        cp: [adresse.cp, Validators.required],
        localite: [adresse.localite, Validators.required],
        rue: [adresse.rue, Validators.required],
        num: [adresse.num, Validators.required],
      })
      });
  }

  onUpdateAdresse(): void{
    this.submitted = true;
    if (this.adresseFormGroup?.invalid) return;

    this.adresseService.updateAdresse(this.adresseFormGroup?.value).subscribe(
      data=>{alert('maj ok')},
      err=>{
        alert(err.headers.get("error"));
      });
  }

}
