import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  termino: string = '';

  hayError: boolean = false;

  paises: Country[]= [];

  constructor(private paisService: PaisService){

  }

  buscar (termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarRegion(this.termino)
    .subscribe((paises) =>{
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino:string){
    this.hayError = false;
    //TODO: Crear sugerencias
  }
}
