import { Curso } from './curso';

export class  Professor {
  private curso: Curso
  
  constructor(curso: string) {
    this.setCurso = new Curso(curso);
  }

  get getCurso(): Curso {
    return this.curso;
  }

  private set setCurso(curso: Curso) {
    this.curso = curso;
  }
}