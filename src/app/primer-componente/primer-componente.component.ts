import { Component, OnInit } from '@angular/core';
import { PostService } from '../providers/post.service';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  posts: any[] = [];
  mostrarPosts: boolean = false;

  constructor(private postService: PostService){
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

}
