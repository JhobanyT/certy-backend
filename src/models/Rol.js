class Rol {
  constructor({ id, nombre, estado }) {
    this.id = id;
    this.nombre = nombre;
    this.estado = estado;
  }

  obtenerInfoCompleta() {
    return {
      id: this.id,
      nombre: this.nombre,
      estado: this.estado
    };
  }
}

module.exports = Rol;
