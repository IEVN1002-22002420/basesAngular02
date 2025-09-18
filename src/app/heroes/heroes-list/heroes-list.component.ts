import { Component } from '@angular/core';
import { Heroes } from '../heroes';
import {race} from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent {
  listFilter:string="";
  muestraImg:boolean=true;
  showImage(){
    this.muestraImg=!this.muestraImg
  }

  heroes:Heroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      descripcion:"Kakaroto",
      race:"Saiyan",
      ki:2500
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      descripcion:"saiyan - male",
      race:"humano",
      ki:19.84
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:"Piccolo",
      descripcion:"verde",
      race:"Namekiano",
      ki:500
    },
    {
      imagen:"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      descripcion:"pelo verde",
      race:"Humano",
      ki:0
    }
  ]
}
