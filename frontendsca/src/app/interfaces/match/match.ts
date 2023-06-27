import Player from "../player/player";
import Team from "../team/team";


export default interface Match {
    id?: string;
    name?: string;
    description?: string;
    creationDate?: string; // Assuming a string format, since LocalDate is not available in JavaScript/TypeScript
    matchDate?: string; // Assuming a string format, since LocalDateTime is not available in JavaScript/TypeScript
    matchHour?: string;
    timePlay?: string;
    currentTime?: string;
    timePlayed?: string;
    local?: Team;
    visitante?: Team;
    titularesLocal?: Player[];
    suplentesLocal?: Player[];
    titularesVisitante?: Player[];
    suplentesVisitante?: Player[];
    marcadorLocal?: number;
    marcadorVisitante?: number;
  }
