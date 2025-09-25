import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = "";
  compradores: string = "";
  boletas: string = "";
  tieneTarjeta: string = "no";
  salida: string = "";
  num2: string = "";

  porcentaje1(): void {
    let total = parseInt(this.boletas) * 12;
    total = total - (total * 0.15);

    if (this.tieneTarjeta == "si") {
      total = total - (total * 0.10);
    }

    this.num2 = total.toString();
    this.salida = "Total a pagar: $" + this.num2;
  }

  porcentaje2(): void {
    let total = parseInt(this.boletas) * 12;
    total = total - (total * 0.10);

    if (this.tieneTarjeta == "si") {
      total = total - (total * 0.10);
    }

    this.num2 = total.toString();
    this.salida = "Total a pagar: $" + this.num2;
  }

  porcentaje3(): void {
    let total = parseInt(this.boletas) * 12;

    if (this.tieneTarjeta == "si") {
      total = total - (total * 0.10);
    }

    this.num2 = total.toString();
    this.salida = "Total a pagar: $" + this.num2;
  }

  porcentaje4(): void {
    let maxBoletas = parseInt(this.compradores) * 7;

    if (parseInt(this.boletas) > maxBoletas) {
      this.salida = "No puede comprar más de " + maxBoletas + " boletas.";
    } else {
      if (parseInt(this.boletas) > 5) {
        this.porcentaje1();
      } else if (parseInt(this.boletas) >= 3 && parseInt(this.boletas) <= 5) {
        this.porcentaje2();
      } else {
        this.porcentaje3();
      }
    }
  }
}
