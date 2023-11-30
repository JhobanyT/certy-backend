class RU {
  constructor(id, rol_id, usuario_id) {
    this.id = id;
    this.rol_id = rol_id;
    this.usuario_id = usuario_id;
  }

  obtenerRelacionCompleta() {
    return {
      id: this.id,
      rol_id: this.rol_id,
      usuario_id: this.usuario_id
    };
  }
}

module.exports = RU;
