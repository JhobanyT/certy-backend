class NivelAcademico {
  constructor({ id, nivel, tipo }) {
    this.id = id;
    this.nivel = nivel;
    this.tipo = tipo;
  }

  obtenerInfoCompleta() {
    return {
      id: this.id,
      nivel: this.nivel,
      tipo: this.tipo
    };
  }
}

module.exports = NivelAcademico;