class ModuloFormativo {
  constructor({ id, nombre }) {
    this.id = id;
    this.nombre = nombre;
  }

  obtenerInfoCompleta() {
    return {
      id: this.id,
      nombre: this.nombre
    };
  }
}

module.exports = ModuloFormativo;
