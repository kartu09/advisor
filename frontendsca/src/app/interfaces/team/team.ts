import { Player } from "../player/player";

export interface Team {
  id: number;
  name: string;
  description: string;
  players?: Player[]; // Assuming a team can have zero or more players
  creationDate: string; // Assuming a string format, since LocalDate is not available in JavaScript/TypeScript
}
