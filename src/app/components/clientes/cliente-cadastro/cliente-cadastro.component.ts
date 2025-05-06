import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-cadastro',
  imports: [FormsModule],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.css'
})
export class ClienteCadastroComponent {
  // Evento de saída que permite ao componente filho (ClienteCadastroComponent)
  // Enviar uma string para o componente pai (ClienteComponent)
  @Output() salvarEvento = new EventEmitter<void>();

  // O componente pai vai passar o objeto do cliente de acrodo com modo:
  // - modo de cadastro os campos do cliente estarão vazios
  // = modo de editar os campos do cliente estarão preenchidos
  @Input() cliente?: Cliente;
  

  salvar() {
    this.salvarEvento.emit();
  }
}
