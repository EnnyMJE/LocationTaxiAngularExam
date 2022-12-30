import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdressesService} from "../../services/adresse.service";

@Component({
  selector: 'app-newadresse',
  templateUrl: './newadresse.component.html',
  styleUrls: ['./newadresse.component.css']
})
export class NewadresseComponent implements OnInit {
  adresseFormGroup?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private adresseService: AdressesService) { }

  ngOnInit(): void {
    this.adresseFormGroup = this.fb.group({
      cp: ['',Validators.required],
      localite:['',Validators.required],
      rue:['',Validators.required],
      num:['',Validators.required],
    });
  }

  onSaveAdresse(){
    this.submitted=true;
    if (this.adresseFormGroup?.invalid) return;
    this.adresseService.save(this.adresseFormGroup?.value).subscribe({
      next : data=>{alert('sauvgarde ok'); alert("no d'adresse = "+ data.id_adresse)},
      error: err => alert(err.headers.get("error"))
    });
  }

}
