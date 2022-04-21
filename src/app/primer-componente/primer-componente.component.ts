import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/Post';
import { PostService } from '../providers/post.service';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  posts: Post[] = [];
  mostrarPosts: boolean = false;
  cargando: boolean = false;
  pagina: number = 1;

  constructor(private postService: PostService,
    private router: Router){
    this.postService.obtenerPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

  mostrarListaPosts(){
    this.mostrarPosts = !this.mostrarPosts;
  }

  cambiarPagina(event: any){
    this.pagina = event;
  }

  crearPost(){
    this.router.navigate(['/posts/crear']);
  }

  actualizar(id:number){
    this.router.navigate(['/posts/'+id+'/actualizar']);
  }

  eliminar(){

  }

}
