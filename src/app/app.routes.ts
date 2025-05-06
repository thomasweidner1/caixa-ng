import { Routes } from '@angular/router';
import { CadastroProdutoComponent } from './components/produtos/cadastro-produto/cadastro-produto.component';
import { CadastroReceitaComponent } from './components/receitas/cadastro-receita/cadastro-receita.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';

export const routes: Routes = [
    {path: "produto", component: CadastroProdutoComponent},
    {path: "receita", component: CadastroReceitaComponent},
    {path: "clientes", component: ClienteComponent}
];
