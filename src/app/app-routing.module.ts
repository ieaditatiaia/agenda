import { SemanalComponent } from './semanal/semanal/semanal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensalComponent } from './mensal/mensal.component';
import { NovoComponent } from './evento/novo/novo.component';

const routes: Routes = [
  { path: '', redirectTo: 'mensal', pathMatch: 'full' },
  { path: 'mensal', component: MensalComponent },
  { path: 'semanal', component: SemanalComponent },
  { path: 'novo', component: NovoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
