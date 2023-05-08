import { Team } from "../team/team";

export interface Player {
    id?: number;
    name: string;
    dorsal: number;
    dateOfBirth: string;
    team: number;
}