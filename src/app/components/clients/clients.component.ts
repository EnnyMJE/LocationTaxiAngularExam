import { Component, OnInit } from '@angular/core';
import {Client} from "../../entities/client.entities";
import {ClientsService} from "../../services/clients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients?: Client[];
  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: any) {
    this.clientsService.getClientNom(value.nom).subscribe(
      {
        next: data => {this.clients = data}
      });
  }

  onNewClient() {
    this.router.navigateByUrl('newClient');
  }

  onDelete(c: Client) {
    let v = confirm('etes vous sûr de vouloir supprimer ? ');
    if (v){
      this.clientsService.deleteClient(c).subscribe(
        {
          next: data => {
            this.onSearch(c)
          },
          error: err => { alert(err.headers.get("error"));}
        }
      );
    }
  }

  onEdit(c: Client) {
    this.router.navigateByUrl("editClient/"+c.id_client);
  }
}
