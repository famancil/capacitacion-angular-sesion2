import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ActualizarPostComponent } from './posts/actualizar-post/actualizar-post.component';
import { CrearPostComponent } from './posts/crear-post/crear-post.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent},
  { path: 'posts', component: PrimerComponenteComponent},
  { path: 'posts/crear', component: CrearPostComponent},
  { path: 'posts/:id/actualizar', component: ActualizarPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
