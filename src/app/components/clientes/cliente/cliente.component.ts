import { Component } from '@angular/core';
import { ClienteCadastroComponent } from "../cliente-cadastro/cliente-cadastro.component";
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente',
  imports: [ClienteCadastroComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clientes: Array<Cliente> = [];
  idAtual: number = 0;

  // Será o cliente que utilizaremos para preencher os cmapos na tela e posteriormente salvar
  cliente: Cliente;


  constructor(){
    this.cliente = new Cliente();
  }
  // evento que é executado quando o componenete é instaciado
  ngOnInit(){
    this.carregarClientesDoLocalStorage();
  }

  registrarClienteSalvo(){
    if (this.cliente.id === 0)
      this.cadastrar();
    else
      this.editar();
    
    this.salvarEmLocalStorage();
  }

  private editar(){
    let indiceCliente = this.clientes.findIndex(x => x.id == this.cliente.id);
    this.clientes[indiceCliente].nome = this.cliente.nome;
  }
  
  private cadastrar() {
    this.idAtual++;

    this.cliente.id = this.idAtual;
    // Adicionando este objeto na lista de clientes
    this.clientes.push(this.cliente);
  }

  salvarEmLocalStorage(){
    // this.clientes é uma lista de objetos da classe Clientes
    // JSON.stringify é uma função para converter listas/objetos para string no formato JSON
    const clientesString = JSON.stringify(this.clientes);
    // Amazenando utilizando a chave 'clientes' a string com a lista de clientes
    localStorage.setItem("clientes", clientesString);
  }

  carregarClientesDoLocalStorage(){
    // Obter do localstorage(armazenamento no navegador) utilizando a chave clientes
    const clientesString = localStorage.getItem("clientes");
    // verificar senão existe a lista de clientes no LocalStorage
    if (clientesString === null)
      // Encerra a execução da função, pois não existe lista armazenada
      return;
    // Converter a string(JSON) para lista de objetos  
    this.clientes = JSON.parse(clientesString);
    // Percorre cada um dos clientes para atualizar o idAtual com o maior id dos clientes cadastrados
    this.clientes = JSON.parse(clientesString);

    Array.from(this.clientes).forEach(cliente => {
      if (cliente.id > this.idAtual){
        this.idAtual = cliente.id
      }
    });
  }

  apagar(cliente: Cliente){

    let confirmacao = confirm(`Deseja realmente apagar o cliente'${cliente.nome}'?`);
    if (confirmacao !== true)
      return;

    let indiceCliente = this.clientes.findIndex(x => x.id == cliente.id);
    this.clientes.splice(indiceCliente, 1)

    this.salvarEmLocalStorage();
  }

  preencherCamposParaEditar(cliente: Cliente){
    this.cliente = new Cliente();
    this.cliente.id = cliente.id;
    this.cliente.nome = cliente.nome;
  }
}

//localStorage.setItem("fruta", "Bananinha");
//localStorage.getItem("fruta");
//localStorage.length para ver quantos dados tem
//localStorage.removeItem("")