import { Curso } from './curso';

export class Professor {
  private curso: Curso
  
  constructor(nomeCurso: string) {
    this.setCurso = new Curso(nomeCurso);
  }

  get getCurso(): Curso {
    return this.curso;
  }

  private set setCurso(curso: Curso) {
    this.curso = curso;
  }
}