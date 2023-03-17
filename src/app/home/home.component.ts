import { Component, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public story: Story[] =  [
    { text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      img: "1.jpg"},
    { text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes",
      img: "2.jpg"},
    { text: "L'heroi va decidir travessar la porta que el portava a casa",
      img: "3.jpg"},
    { text: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      img: "4.jpg"}
  ];

  showScene: boolean = false;

  constructor() { };

  ngOnInit(): void {

  };
}
