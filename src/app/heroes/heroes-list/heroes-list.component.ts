import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent {
  heroes:any[]=[
    {
      "imagen":"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      descripcion:"Kakaroto",
      race:"Saiyan",
      ki:2500
    },
    {
      "imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      descripcion:"saiyan - male",
      race:"humano",
      ki:19.84
    },
    {
      "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:"Piccolo",
      descripcion:"verde",
      race:"Namekiano",
      ki:500
    },
    {
      "imagen":"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      descripcion:"pelo verde",
      race:"Humano",
      ki:0
    }
  ]
}
