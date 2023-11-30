class PR {
  constructor(id, privilegio_id, rol_id) {
    this.id = id;
    this.privilegio_id = privilegio_id;
    this.rol_id = rol_id;
  }

  obtenerRelacionCompleta() {
    return {
      id: this.id,
      privilegio_id: this.privilegio_id,
      rol_id: this.rol_id
    };
  }
}

module.exports = PR;
