class Pee {
  constructor(id, estudiante_id, plan_estudio_id) {
    this.id = id;
    this.estudiante_id = estudiante_id;
    this.plan_estudio_id = plan_estudio_id;
  }

  obtenerRelacionCompleta() {
    return {
      id: this.id,
      estudiante_id: this.estudiante_id,
      plan_estudio_id: this.plan_estudio_id
    };
  }
}

module.exports = Pee;
