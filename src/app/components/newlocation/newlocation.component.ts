import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocationService} from "../../services/location.service";
import {Location} from "../../entities/location.entities";
import {formatDate} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-newlocation',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewlocationComponent implements OnInit {
  @Input() cliact?: FormGroup;
  @Output() newLocation = new EventEmitter<Location>();
  locationFormGroup?: FormGroup;
  submitted = false;
  loc?: Location;

  constructor(private fb: FormBuilder, private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationFormGroup=this.fb.group({
      dateloc: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      kmtotal:['',Validators.required],
      cout: ['',Validators.required]

    });
  }

  onSaveLocation(): void {
    this.submitted=true;

    this.locationService.save(this.locationFormGroup?.value, this.cliact?.value).subscribe(data=>{
      alert('sauvegarde ok');
      this.loc=data;
      this.newLocation.emit(data)
    },
      err=> {
      alert(err.headers.get("error"));
      });



  }
}
