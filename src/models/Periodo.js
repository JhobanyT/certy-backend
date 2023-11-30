class Periodo {
  constructor({ id, nombre, horas, creditos }) {
    this.id = id;
    this.nombre = nombre;
    this.horas = horas;
    this.creditos = creditos;
  }

  obtenerInfoCompleta() {
    return {
      id: this.id,
      nombre: this.nombre,
      horas: this.horas,
      creditos: this.creditos
    };
  }

  calcularHorasCreditos() {
    return this.horas * this.creditos;
  }
}

module.exports = Periodo;
