import Player from "../player/player";
import Tactics from "../tactics/tactics";
import Team from "../team/team";


export default interface Match {
    id?: string;
    name?: string;
    description?: string;
    creationDate?: string; // Assuming a string format, since LocalDate is not available in JavaScript/TypeScript
    matchDate?: string; // Assuming a string format, since LocalDateTime is not available in JavaScript/TypeScript
    matchHour?: string;

    isTimeRunning?: boolean;
    horaInicioPrimeraParte?: Date;
    horaFinPrimeraParte?: Date;
    horaInicioSegundaParte?: Date;
    horaFinSegundaParte?: Date;
    timePlayed?: number;

    tacticas?: Tactics [];


    timePlay?: string;
    currentTime?: string;
    local?: Team;
    visitante?: Team;
    titularesLocal?: Player[];
    suplentesLocal?: Player[];
    titularesVisitante?: Player[];
    suplentesVisitante?: Player[];
    marcadorLocal?: number;
    marcadorVisitante?: number;
  }
