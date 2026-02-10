import { Injectable } from "@angular/core";
import { Cotxe } from "../models/Cotxe";


@Injectable()
export class CotxeService{
    public cotxes: Array<Cotxe>;

    constructor() {
        this.cotxes = [
            new Cotxe('Model S', 'Tesla', 125000 ,'negre', 120, 'electric'),
            new Cotxe('Civic', 'Honda', 250000 ,'blanc', 180, 'gasolina'),
            new Cotxe('Clio', 'Renault', 500000 ,'vermell', 140, 'diesel'),
            new Cotxe('Prius', 'Toyota', 250000 ,'gris', 250, 'hybrid')
        ];
    }

    getText(): String{
        return "Hola! Sóc el servei de Cotxe! 🚗";
    }

    getCotxes(): Array<Cotxe> {
        return this.cotxes;
    }
}