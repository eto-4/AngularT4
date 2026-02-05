import { Component } from '@angular/core';
import { Cotxe } from '../models/Cotxe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-cotxes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './cotxes.html',
  styleUrl: './cotxes.css',
})
export class CotxesComponent {

  constructor(private route: ActivatedRoute, private router: Router) {

    // llegir paràmetres que venen de URL
    // Exemple: /cotxes?model=Golf&marca=VW&preu=20000&color=blau&velocitat=150&combustible=gasolina
    this.route.queryParams.subscribe(params => {
      if (params['model'] && params ['marca']) {
        const cotxe = new Cotxe(
          params['model'],
          params['marca'],
          +params['preu'] || 0,
          params['color'] || 'desconegut',
          +params['velocitat'] || 0,
          params['combustible'] ||'desconegut'
        );
        this.cotxes.push(cotxe);
      }
    });
  }

  // Propietats que estarán enllaçades al form.
  newModel: string = '';
  newMarca: string = '';
  newPreu: number = 0;
  newColor: string = '';
  newVelocitat: number = 0;
  newCombustible: string = '';

  cotxes: Array<Cotxe> = [
    new Cotxe('Model S', 'Tesla', 125000 ,'negre', 120, 'electric'),
    new Cotxe('Civic', 'Honda', 250000 ,'blanc', 180, 'gasolina'),
    new Cotxe('Clio', 'Renault', 500000 ,'vermell', 140, 'diesel'),
    new Cotxe('Prius', 'Toyota', 250000 ,'gris', 250, 'hybrid')
  ]

  addCotxe() {
    // Crear un nou cotxe fent servir el model
    const cotxe = new Cotxe(
      this.newModel,
      this.newMarca,
      this.newPreu,
      this.newColor,
      this.newVelocitat,
      this.newCombustible
    );

    // Afegir cotxe a cotxes
    this.cotxes.push(cotxe);

    // reiniciar el form
    this.newModel = '';
    this.newMarca = '';
    this.newPreu = 0;
    this.newVelocitat = 0;
    this.newCombustible = '';
  }

  eliminarCotxe(index: number) {
    this.cotxes.splice(index, 1);
  }
}