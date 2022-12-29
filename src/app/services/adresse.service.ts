import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Adresse} from "../entities/adresse.entities";

@Injectable({providedIn:"root"})
export class AdressesService{
  private host = environment.host;

  constructor(private httpClient:HttpClient) {
  }

  getAdresse(id_Adresse:number):Observable<Adresse>{
    return this.httpClient.get<Adresse>(this.host+"/adresses/"+id_Adresse);
  }

  getAdresseLocalite(localite:string):Observable<Adresse[]>{
    return this.httpClient.get<Adresse[]>(this.host+"/adresses/localite="+localite);
  }

  deleteAdresse(adresse:Adresse):Observable<void>{
    return this.httpClient.delete<void>(this.host+"/adresses/"+adresse.id_adresse);
  }

  save(a: Adresse):Observable<Adresse>{
    return this.httpClient.post<Adresse>(this.host+"/adresses",a);
  }

  updateAdresse(a:Adresse):Observable<Adresse>{
    return this.httpClient.put<Adresse>(this.host+"/adresses/"+a.id_adresse,a);
  }
}
