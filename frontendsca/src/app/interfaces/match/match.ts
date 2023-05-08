import { Team } from "../team/team";

export interface Match {
    id: number;
    name: string;
    description: string;
    creationDate: string; // Assuming a string format, since LocalDate is not available in JavaScript/TypeScript
    matchDate: string; // Assuming a string format, since LocalDateTime is not available in JavaScript/TypeScript
    local: Team;
    visitante: Team;
    marcadorLocal: number;
    marcadorVisitante: number;
  }
