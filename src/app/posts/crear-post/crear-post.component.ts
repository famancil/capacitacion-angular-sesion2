import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/providers/post.service';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit {

  titulo: string = "";
  descripcion: string = "";
  cargando: boolean = false;
  usuarioCreado: boolean = false;
  post: Post = {id:0,title:"", body:"",userId:0};

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  private construiJsonEnvioInicio(){
    let formData:any = {};
    
    formData.title = this.titulo;
    formData.body = this.descripcion;
    formData.userId = 1;

    return formData;
  }

  volver(){
    this.router.navigate(['/posts']);
  }

  enviarPost() {
    this.cargando = true;
    let data: any;
    data = this.construiJsonEnvioInicio();
    
    this.postService.enviarPost(data)
    .subscribe(res => {

      this.usuarioCreado = true;
      this.post = res;

      console.log(res);
      this.cargando = false;

    },
      error => {
        console.log(error);
        this.cargando = false;
    });

  }

}
