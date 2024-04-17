import { Injectable } from '@angular/core';
import Livro from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Um Pulo Sem Fim', resumo: 'O livro narra a história de um menino chamado Pedro, que tem o desejo de voar. Com uma mistura de fantasia e realidade, Pedro embarca em uma jornada emocionante em busca de realizar seu sonho de voar. Ao longo da narrativa, o livro aborda temas como imaginação, coragem, amizade e a importância de perseguir os nossos sonhos. Com uma linguagem acessível e ilustrações cativantes, "Um Pulo Sem Fim" é uma leitura envolvente que encanta leitores de todas as idades.', autores: ['Zirado','Lollo, José Carlos'] },
    { codigo: 2, codEditora: 2, titulo: 'A barca furada', resumo: 'Neste livro, os autores exploram temas relacionados à sociedade, política e questões éticas por meio de uma narrativa envolvente. A trama acompanha personagens inseridos em um contexto político conturbado, em que precisam lidar com dilemas morais e tomar decisões que podem impactar não apenas suas vidas, mas também o destino de suas nações. Com uma escrita instigante e repleta de reviravoltas, "A Barca Furada" convida os leitores a refletirem sobre questões relevantes e atuais, enquanto acompanham uma história repleta de suspense e tensão.', autores: ['Melo, João','Santos, José Rodrigues dos'] },
    { codigo: 3, codEditora: 3, titulo: 'O chapéu mágico e outras historinhas', resumo: 'È uma coleção de contos encantadores escrita por João Silva, que transporta os leitores para mundos mágicos e aventuras emocionantes. Cada história é única e cativante, promovendo a imaginação e o encantamento em crianças e adultos.', autores: ['Silva, João'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}