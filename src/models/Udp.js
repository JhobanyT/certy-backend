class Udp {
  constructor(id, unidad_didactica_id, periodo_id) {
    this.id = id;
    this.unidad_didactica_id = unidad_didactica_id;
    this.periodo_id = periodo_id;
  }

  obtenerRelacionCompleta() {
    return {
      id: this.id,
      unidad_didactica_id: this.unidad_didactica_id,
      periodo_id: this.periodo_id
    };
  }
}

module.exports = Udp;
