import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdressesService} from "../../services/adresse.service";
import {Observable} from 'rxjs';
import {Adresse} from "../../entities/adresse.entities";

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {
  adresses?: Adresse[];

  constructor(private adressesService: AdressesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSearch(value: any) {
    this.adressesService.getAdresseLocalite(value.localite).subscribe(
      {
        next: data => {
          this.adresses = data
        }
      }
    )
  }

  onNewAdresse() {
    //todo complete this
    this.router.navigateByUrl("newAdresse")
  }

  onDelete(a: Adresse) {
    let v = confirm('êtes vous sûr de vouloir supprimer? ');
    if (v) {
      this.adressesService.deleteAdresse(a).subscribe(
        {
          next: data => {
            this.onSearch(a);
          },
          error: err => {
            alert(err.headers.get("error"));
          }
        }
      );
    }
  }

  onEdit(a: Adresse) {
    this.router.navigateByUrl("editadresse/"+a.id_adresse);

  }
}
