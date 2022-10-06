import { Servicio } from "./servicio";

export class Turno {
    id: number | undefined | null;
    idServicio: number | undefined | null;
    fechaTurno: Date | undefined | null;
    horaInicio: Date | undefined | null;
    horaFin: Date | undefined | null;
    estado: number | undefined | null;
    servicio: Servicio | undefined | null | any;
}
