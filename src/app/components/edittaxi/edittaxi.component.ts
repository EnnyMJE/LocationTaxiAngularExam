import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Taxi} from "../../entities/taxi.entities";
import {TaxiService} from "../../services/taxi.service";

@Component({
  selector: 'app-edittaxi',
  templateUrl: './edittaxi.component.html',
  styleUrls: ['./edittaxi.component.css']
})
export class EdittaxiComponent implements OnInit {
  taxiFormGroup?: FormGroup;
  submitted=false;
  @Input() taxi?: Taxi;
  deleted = false;

  constructor(private taxiService: TaxiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taxiFormGroup = this.fb.group({
      id_taxi: [this.taxi?.id_taxi],
      immatriculation: [this.taxi?.immatriculation, [Validators.required]],
      nbr_max_passagers: [this.taxi?.nbr_max_passagers, Validators.required],
      prixkm: [this.taxi?.prixkm, Validators.required]



    })
  }

  onDeleteTaxi() {
    let v = confirm('êtes vous sûr de vouloir supprimer? ');
    if (v){
      this.taxiService.deleteTaxi(this.taxiFormGroup?.value).subscribe(data=>{
        alert('effacement à été effectuée');
        this.deleted=true;
      })
    }

  }

  onUpdateTaxi(): void{
    this.submitted = true;
    if (this.taxiFormGroup?.invalid){
      return;
    }
    let taximaj: Taxi = this.taxiFormGroup?.value;
    if (this.taxi){
      this.taxiService.updateTaxi(taximaj).subscribe({
        next: data=> alert('maj ok'),
        error: err=>alert(err.headers.get("error"))
      })
    }

  }
}
