import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/providers/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-post',
  templateUrl: './actualizar-post.component.html',
  styleUrls: ['./actualizar-post.component.css']
})
export class ActualizarPostComponent implements OnInit {

  titulo: string = "Este es un titulo de ejemplo";
  descripcion: string = "Este es una descripcion de ejemplo";
  cargando: boolean = false;
  usuarioActualizado: boolean = false;
  posts: Post[] = [];
  post: any;

  constructor(private postService: PostService, private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      //this.post.id = Number(id);
      this.cargando = true;
      this.postService.obtenerPosts().subscribe(data => {        
        this.posts = data;
        this.post = this.posts.find(x => x.id == Number(id));
        this.cargando = false;
      });      
    }
    else this.post.id = 1;
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

  actualizarPost() {
    this.cargando = true;
    let data: any;
    data = this.construiJsonEnvioInicio();
    
    this.postService.actualizarPost(data)
    .subscribe(res => {

      this.usuarioActualizado = true;
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
