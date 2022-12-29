import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Client} from "../entities/client.entities";

@Injectable({providedIn:"root"})
export class ClientsService {
  private host = environment.host;

  constructor(private httpClient:HttpClient) {}

  getClient(id_Client:number):Observable<Client>{
    return this.httpClient.get<Client>(this.host+"/clients/"+id_Client);
  }

  getClientNom(nom:string):Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.host+"/clients/nom="+nom);
  }
  deleteClient(client:Client):Observable<void>{
    return this.httpClient.delete<void>(this.host+"/clients/"+client.id_client);
  }

  save(c: Client): Observable<Client>{
    return this.httpClient.post<Client>(this.host + '/clients', c);
  }
  updateClient(c: Client): Observable<Client>{
    return this.httpClient.put<Client>(this.host + '/clients/' + c.id_client, c);
  }

}
