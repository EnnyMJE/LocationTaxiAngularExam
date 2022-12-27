

import {Client} from "./client.entities";

export interface Location {
  id : number;
  dateloc : string;
  kmtotal : number;
  cout : number;
  client : Client;
}
