import { Comercio } from "./comercio";

export class Servicio {
    id: number | undefined | null;
    idComercio: number | undefined | null;
    nomServico: string | undefined | null;
    horaApertura: Date | undefined | null;
    horaCierre: Date | undefined | null;
    duracion: number | undefined | null;
    comercio: Comercio  | undefined | null | any;
}

