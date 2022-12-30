import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Taxi} from "../entities/taxi.entities";

@Injectable({providedIn:"root"})
export class TaxiService {
  private host = environment.host;

  constructor(private httpClient:HttpClient) {}

  getTaxi(id_Taxi:number):Observable<Taxi>{
    return this.httpClient.get<Taxi>(this.host+"/taxis/"+id_Taxi);
  }

  getTaxiPrixkm(prixkm:number):Observable<Taxi[]>{
    return this.httpClient.get<Taxi[]>(this.host+"/taxis/prixkm="+prixkm);
  }
  deleteTaxi(taxi:Taxi):Observable<void>{
    return this.httpClient.delete<void>(this.host+"/taxis/"+taxi.id_taxi);
  }

  save(t: Taxi): Observable<Taxi>{
    return this.httpClient.post<Taxi>(this.host + '/taxis', t);
  }
  updateTaxi(t: Taxi): Observable<Taxi>{
    return this.httpClient.put<Taxi>(this.host + '/taxis/' + t.id_taxi, t);
  }

}
