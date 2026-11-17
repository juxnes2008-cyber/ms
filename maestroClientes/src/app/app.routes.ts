import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { ClientesList } from './pages/clientes-list/clientes-list';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,          // el marco siempre se muestra
    children: [
      { path: 'clientes', component: ClientesList },   // y adentro va Clientes
      { path: '', redirectTo: 'clientes', pathMatch: 'full' }, // si entras a "/", te manda a clientes
    ],
  },
];
