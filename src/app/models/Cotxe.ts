export class Cotxe
{
    model: string;
    marca: string;
    preu: number;
    color: string;
    velocitat: number;
    combustible: string;
    correComUnLlamp: boolean;

    constructor (
        model: string,
        marca: string,
        preu: number,
        color: string,
        velocitat: number,
        combustible: string,
    ) {
        this.model = model;
        this.marca = marca;
        this.preu = preu;
        this.color = color;
        this.velocitat = velocitat;
        this.combustible = combustible;
        this.correComUnLlamp = velocitat > 150;
    }
}