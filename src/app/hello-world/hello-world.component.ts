import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  title: string = 'Welcome To Angular';
  color: number = -1;
  size: string = 'x-large';
  colors: any[] = [
    {value:0, description: "hello-world"},
    {value:1, description: "color-red"},
    {value:2, description: "color-blue"}
  ]
  sizes: string[] = ["xx-small","x-small","small", "smaller", "medium", "large", "larger", "x-large","xx-large"];

  constructor() { }

  ngOnInit(): void {
  }

}
