import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produtos } from '../../../models/produto';

@Component({
  selector: 'app-cadastro-produto',
  imports: [FormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  
  proximoId: number = 0;

  idParaEditar?: number;
  nome: string = " ";
  produtos: Array <Produtos> = [];

  cadastrarProduto(){
    if(this.nome.length < 1){
      alert("Nome deve conter pelo menos 2 caracteres!")
      return;
    }

    if(this.nome.length > 30){
      alert("Nome deve conter no máximo 30 caracteres!")
      return;
    }

    this.proximoId++;

    let produto = new Produtos(this.proximoId, this.nome);

    this.produtos.push(produto)

  
  }

}
