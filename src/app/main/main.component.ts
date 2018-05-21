import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  public subtitle:Array<string> ;
  public option:Number;
  public button:Array<string>;
  public cards:Array<string>

  constructor() {
    this.subtitle = [
      'Empecemos a jugar!',
      'Encuentra el par que tenga el mismo número y el mismo palo',
      'Ganaste! excelente jugada',
      'Ups perdiste! inténtalo denuevo'
    ],
    this.option = 0;
    this.button = [
      'Start',
      'End'
    ]
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
      '../../assets/images/2e.jpg',
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
      '../../assets/images/2e.jpg',
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
    this.option = 1;
  }

  end() {
    this.option = 0;
  }

}

