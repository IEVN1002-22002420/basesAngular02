import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1: string="";
  num2: string="";
  operacion: string="sumar";
  resultado: string = "";

  sumar(): void {
    this.resultado = (parseFloat(this.num1) + parseFloat(this.num2)).toString();
  }


  restar(): void {

    this.resultado = (parseFloat(this.num1) - parseFloat(this.num2)).toString();
  }


  multiplicar(): void {

    this.resultado = (parseFloat(this.num1) * parseFloat(this.num2)).toString();
  }


  dividir(): void {

    if (parseFloat(this.num2) === 0) {
      this.resultado = "No se puede dividir entre 0";
      return;
    }
    this.resultado = (parseFloat(this.num1) / parseFloat(this.num2)).toString();
  }

  calcular(): void {
    switch (this.operacion) {
      case "sumar": this.sumar(); break;
      case "restar": this.restar(); break;
      case "multiplicar": this.multiplicar(); break;
      case "dividir": this.dividir(); break;
    }
  }
}
