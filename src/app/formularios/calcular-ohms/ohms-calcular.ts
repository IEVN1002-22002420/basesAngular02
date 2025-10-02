export class OhmsCalcular {
  banda1: number = 0
  banda2: number = 0
  banda3: number = 1
  tolerancia: number = 0.05

  color1: string = ""
  color2: string = ""
  color3: string = ""
  colorTol: string = ""

  constructor() {}

  calcularValor(): number {
    const base = Number(`${this.banda1}${this.banda2}`)
    return base * this.banda3
  }

  calcularMaximo(): number {
    const resistencia = this.calcularValor()
    return resistencia + (resistencia * this.tolerancia)
  }

  calcularMinimo(): number {
    const resistencia = this.calcularValor()
    return resistencia - (resistencia * this.tolerancia)
  }
}
