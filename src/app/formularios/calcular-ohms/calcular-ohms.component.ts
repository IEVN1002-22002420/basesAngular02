import { Component } from '@angular/core';
import { OhmsCalcular } from './ohms-calcular';


@Component({
  selector: 'app-calcular-ohms',
  standalone: false,
  templateUrl: './calcular-ohms.component.html',
  styleUrl: './calcular-ohms.component.css'
})
export class CalcularOhmsComponent {
  ohms: OhmsCalcular = new OhmsCalcular()
  resultado: number = 0
  maximo: number = 0
  minimo: number = 0

  colorBanda1: string = ''
  colorBanda2: string = ''
  colorBanda3: string = ''
  colorTolerancia: string = ''

  calcular() {

    if(this.ohms.banda1 == 0){ this.ohms.color1 = "Negro"; this.colorBanda1="black" }
    if(this.ohms.banda1 == 1){ this.ohms.color1 = "Marrón"; this.colorBanda1="brown" }
    if(this.ohms.banda1 == 2){ this.ohms.color1 = "Rojo"; this.colorBanda1="red" }
    if(this.ohms.banda1 == 3){ this.ohms.color1 = "Naranja"; this.colorBanda1="orange" }
    if(this.ohms.banda1 == 4){ this.ohms.color1 = "Amarillo"; this.colorBanda1="yellow" }
    if(this.ohms.banda1 == 5){ this.ohms.color1 = "Verde"; this.colorBanda1="green" }
    if(this.ohms.banda1 == 6){ this.ohms.color1 = "Azul"; this.colorBanda1="blue" }
    if(this.ohms.banda1 == 7){ this.ohms.color1 = "Violeta"; this.colorBanda1="violet" }
    if(this.ohms.banda1 == 8){ this.ohms.color1 = "Gris"; this.colorBanda1="gray" }
    if(this.ohms.banda1 == 9){ this.ohms.color1 = "Blanco"; this.colorBanda1="white" }

    if(this.ohms.banda2 == 0){ this.ohms.color2 = "Negro"; this.colorBanda2="black" }
    if(this.ohms.banda2 == 1){ this.ohms.color2 = "Marrón"; this.colorBanda2="brown" }
    if(this.ohms.banda2 == 2){ this.ohms.color2 = "Rojo"; this.colorBanda2="red" }
    if(this.ohms.banda2 == 3){ this.ohms.color2 = "Naranja"; this.colorBanda2="orange" }
    if(this.ohms.banda2 == 4){ this.ohms.color2 = "Amarillo"; this.colorBanda2="yellow" }
    if(this.ohms.banda2 == 5){ this.ohms.color2 = "Verde"; this.colorBanda2="green" }
    if(this.ohms.banda2 == 6){ this.ohms.color2 = "Azul"; this.colorBanda2="blue" }
    if(this.ohms.banda2 == 7){ this.ohms.color2 = "Violeta"; this.colorBanda2="violet" }
    if(this.ohms.banda2 == 8){ this.ohms.color2 = "Gris"; this.colorBanda2="gray" }
    if(this.ohms.banda2 == 9){ this.ohms.color2 = "Blanco"; this.colorBanda2="white" }

    if(this.ohms.banda3 == 1){ this.ohms.color3 = "x1"; this.colorBanda3="black" }
    if(this.ohms.banda3 == 10){ this.ohms.color3 = "x10"; this.colorBanda3="brown" }
    if(this.ohms.banda3 == 100){ this.ohms.color3 = "x100"; this.colorBanda3="red" }
    if(this.ohms.banda3 == 1000){ this.ohms.color3 = "x1000"; this.colorBanda3="orange" }
    if(this.ohms.banda3 == 10000){ this.ohms.color3 = "x10000"; this.colorBanda3="yellow" }
    if(this.ohms.banda3 == 100000){ this.ohms.color3 = "x100000"; this.colorBanda3="green" }
    if(this.ohms.banda3 == 1000000){ this.ohms.color3 = "x1000000"; this.colorBanda3="blue" }
    if(this.ohms.banda3 == 10000000){ this.ohms.color3 = "x10000000"; this.colorBanda3="violet" }
    if(this.ohms.banda3 == 100000000){ this.ohms.color3 = "x100000000"; this.colorBanda3="gray" }
    if(this.ohms.banda3 == 1000000000){ this.ohms.color3 = "x1000000000"; this.colorBanda3="white" }

    if(this.ohms.tolerancia == 0.05){ this.ohms.colorTol = "Dorado"; this.colorTolerancia="gold" }
    if(this.ohms.tolerancia == 0.1){ this.ohms.colorTol = "Plateado"; this.colorTolerancia="silver" }

    this.resultado = this.ohms.calcularValor()
    this.maximo = this.ohms.calcularMaximo()
    this.minimo = this.ohms.calcularMinimo()
  }
}
