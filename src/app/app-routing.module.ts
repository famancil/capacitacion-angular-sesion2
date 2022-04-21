import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent},
  { path: 'posts', component: PrimerComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
