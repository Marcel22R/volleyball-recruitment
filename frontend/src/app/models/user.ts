import {Role} from "./role";
import {VolleyRole} from "./volleyRole";

export interface User {
  id?: number;
  username: string;
  firstName: string;
  secondName: string;
  password: string;
  role: Role;
  token?: string;
  volleyRole: VolleyRole
}

