import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-receita',
  imports: [FormsModule],
  templateUrl: './cadastro-receita.component.html',
  styleUrl: './cadastro-receita.component.css'
})
export class CadastroReceitaComponent {
  // Toda vez que utilizar [(ngModel)] é obrigatório importar FormsModule
  // ngModel é a forma que fazemos a ligação em algum campo com uma variável

  nome: string = " ";
  valor: number = 0.0;
  receitas: Array<string> = [];

  salvarReceita(){
    debugger;
    this.receitas.push(this.nome);
    alert(this.nome);
  }
}
