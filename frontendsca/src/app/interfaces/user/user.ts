import { Role } from "src/app/enums/Role";

export class User {
  username: string;
  name: string;
  dateOfBirth: Date;
  role: Role;
  email: string;
  password: string;

  constructor() {
    this.username = '';
    this.name = '';
    this.dateOfBirth = new Date();
    this.role = Role.USER;
    this.email = '';
    this.password = '';
  }


}
