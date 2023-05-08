import { Role } from "src/app/enums/Role";

export interface User {
  username: string;
  name: string;
  dateOfBirth: string;
  role: Role;
  email: string;
  password: string;
}
