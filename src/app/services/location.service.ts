import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Location} from "../entities/location.entities";
import {Client} from "../entities/client.entities";
import {formatDate} from "@angular/common";

@Injectable({providedIn:"root"})
export class LocationService {
  host=environment.host;
  constructor(private httpClient : HttpClient) {
  }

  deleteLocation(l: Location): Observable<void>{
    return this.httpClient.delete<void>(this.host + '/locations/' + l.id);
  }

  save(l: Location, cl:Client): Observable<Location>{
    l.client = cl;
    return this.httpClient.post<Location>(this.host + '/locations/',l);
  }

  updateLocation(l: Location): Observable<Location>{
    return this.httpClient.put<Location>(this.host + '/locations/' + l.id, l);
  }

  getLocationsClient(id_Client: number) : Observable<Location[]>{
    return this.httpClient.get<Location[]>(this.host + '/locations/id_client=' + id_Client);
  }

  search(id:number):Observable<Location>{
    return this.httpClient.get<Location>(this.host+'/locations/' +id);
  }

}
