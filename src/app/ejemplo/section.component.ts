import { Component } from '@angular/core';

@Component({
  selector: 'section',
  // template:`<h1 [style.background]="'yellow'">{{ nombre }}</h1>
  //           <h2 *ngIf="mostrar !== false" [style.background]="color">{{ apellido }}</h2>
  //           <h3>{{ listaAnimals }}</h3>
  //           <h3>{{ listaAnimals[0] }}</h3>
  //           <ul>
  //             <li *ngFor=" let lista of listaAnimals ">{{lista}}</li>
  //           </ul>
  //         `
  templateUrl: './section.component.html',
  // styleUrls: ['./app.component.css']
})

// export class SectionComponent {
//   public nombre = 'aurora';
//   public apellido = 'vásquez';
//   public mostrar = true;
//   public color = 'blue'
//   public listaAnimals = [
//     'jirafa',
//     'chancho',
//     'oveja',
//     'gusano'
//   ]
// }

export class SectionComponent {
  public nombre:string; 
  public apellido:string;  
  public mostrar: boolean;
  public color:string;
  public listaAnimals:Array<any>

  constructor() {
    this.nombre = 'aurora';
    this.apellido = 'vásquez';
    this.mostrar = true;
    this.color  = 'blue';
    this.listaAnimals  = [
      'jirafa',
      'chancho',
      'oveja',
      24
    ];
  }
}
