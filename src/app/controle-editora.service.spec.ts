import { Injectable } from '@angular/core';
import  Editora  from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Caminhos' },
    { codEditora: 2, nome: 'Nostalgia Editora' },
    { codEditora: 3, nome: 'Capim Limão' }
  ];

  constructor() { }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}