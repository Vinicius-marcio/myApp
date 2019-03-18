import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  
  public nomeUsuario:string="Marcio Vinicius";
  
  constructor() { }

  public somaNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ngOnInit() {
   // this.somaNumeros(10,99);
  }

}
