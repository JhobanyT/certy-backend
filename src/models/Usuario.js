class Usuario {
  constructor({ id, nombre, correo, clave, estado }) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.clave = clave;
    this.estado = estado;
  }

  obtenerInfoSinClave() {
    return {
      id: this.id,
      nombre: this.nombre,
      correo: this.correo,
      estado: this.estado
    };
  }
}

module.exports = Usuario;