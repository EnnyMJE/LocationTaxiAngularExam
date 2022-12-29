import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  clientFormGroup?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private clientService: ClientsService) {
  }

  ngOnInit(): void {
    this.clientFormGroup = this.fb.group({
      mail: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['+32(0)', Validators.required],
    });
  }

  onSaveClient() {
    /*this.submitted = true;
    this.clientService.save(this.clientFormGroup?.value).subscribe(data =>
        alert('sauvgarde ok'),
      err => {
        alert(err.headers.get("error"));
      });*/

    this.submitted = true;
    if (this.clientFormGroup?.invalid) return;
    this.clientService.save(this.clientFormGroup?.value).subscribe({
      next : data=>{alert('sauvegarde ok');alert("no du client = "+data.id_client)},
      error: err=> alert(err.headers.get("error"))
    });
  }


}
