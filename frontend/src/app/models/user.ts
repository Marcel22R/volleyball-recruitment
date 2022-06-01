import {Role} from "./role";
import {VolleyRole} from "./volleyRole";

export interface User {
  id?: number;
  username: string;
  firstName: string;
  secondName: string;
  password: string;
  pictureUrl?:string;
  quote?:string;
  zembuiTitle:string;
  role: Role;
  token?: string;
  volleyRole: VolleyRole
}

