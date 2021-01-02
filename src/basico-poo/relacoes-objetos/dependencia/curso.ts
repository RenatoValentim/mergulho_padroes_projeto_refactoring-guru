export class Curso {
  constructor(private nomeCurso: string) {
    this.setNomeCurso = nomeCurso;
  }

  private set setNomeCurso(nomeCurso: string) {
    this.nomeCurso = nomeCurso;
  }

  get getNomeCurso() {
    return this.nomeCurso;
  }
}