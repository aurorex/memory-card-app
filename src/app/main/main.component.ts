import { Component, Renderer2, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  public subtitle:Array<string> ;
  public option:Number;
  public button:Array<string>;
  public cards:Array<string>;
  public url:any;
  public url1:any;
  public url2:any;
  public url3:any;
  public state:boolean;

  constructor() {
    this.subtitle = [
      'presiona START para empezar a jugar',
      'Encuentra el par que tenga el mismo número y el mismo palo',
      'Ganaste! excelente jugada',
      'Ups perdiste! inténtalo denuevo'
    ],
    this.option = 0;
    this.button = [
      'Start',
      'End'
    ],
    this.state = true;
    this.cards = [
      '../../assets/images/1c.jpg',
      '../../assets/images/2c.jpg',
      '../../assets/images/3c.jpg',
      '../../assets/images/4c.jpg',
      '../../assets/images/5c.jpg',
      '../../assets/images/6c.jpg',
      '../../assets/images/7c.jpg',
      '../../assets/images/8c.jpg',
      '../../assets/images/9c.jpg',
      '../../assets/images/10c.jpg',
      '../../assets/images/jc.jpg',
      '../../assets/images/qc.jpg',
      '../../assets/images/kc.jpg',
      '../../assets/images/1e.jpg',
      '../../assets/images/2e.png',
      '../../assets/images/3e.jpg',
      '../../assets/images/4e.jpg',
      '../../assets/images/5e.jpg',
      '../../assets/images/6e.jpg',
      '../../assets/images/7e.jpg',
      '../../assets/images/8e.jpg',
      '../../assets/images/9e.jpg',
      '../../assets/images/10e.jpg',
      '../../assets/images/je.jpg',
      '../../assets/images/qe.jpg',
      '../../assets/images/ke.jpg',
      '../../assets/images/1d.jpg',
      '../../assets/images/2d.jpg',
      '../../assets/images/3d.jpg',
      '../../assets/images/4d.jpg',
      '../../assets/images/5d.jpg',
      '../../assets/images/6d.jpg',
      '../../assets/images/7d.jpg',
      '../../assets/images/8d.jpg',
      '../../assets/images/9d.jpg',
      '../../assets/images/10d.jpg',
      '../../assets/images/jd.jpg',
      '../../assets/images/qd.jpg',
      '../../assets/images/kd.jpg',
      '../../assets/images/1t.jpg',
      '../../assets/images/2t.jpg',
      '../../assets/images/3t.jpg',
      '../../assets/images/4t.jpg',
      '../../assets/images/5t.jpg',
      '../../assets/images/6t.jpg',
      '../../assets/images/7t.jpg',
      '../../assets/images/8t.jpg',
      '../../assets/images/9t.jpg',
      '../../assets/images/10t.jpg',
      '../../assets/images/jt.jpg',
      '../../assets/images/qt.jpg',
      '../../assets/images/kt.jpg',
    ]
  }
  
  start() {
    this.state = false;
    this.option = 1;
      let i =  Math.floor(Math.random() * (51 - 0)) + 0;
      this.url = this.cards[i];
      console.log(this.url)

      let j =  Math.floor(Math.random() * (51 - 0)) + 0;
      this.url1 = this.cards[j];
      console.log(this.url1)

      let k =  Math.floor(Math.random() * (51 - 0)) + 0;
      this.url2 = this.cards[k];
      console.log(this.url2)

      let l =  Math.floor(Math.random() * (51 - 0)) + 0;
      this.url3 = this.cards[l];
      console.log(this.url3)
  }

  found(img) {
    console.log(img.alt)
    if(img.alt === '1'){
      alert('hola');
    }

    console.log(img.alt === '1')
  }

  end() {
    alert('¿QUIERES ABANDONAR EL JUEGO?,presiona ACEPTAR para dejar de jugar');
    this.option = 0;
    this.state = true;
  }
}


