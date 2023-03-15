import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})

export class SceneComponent implements OnInit {

  @Input() public story: Story[];
  sentenceStyle = "sentence";

  constructor() { 
    this.story = [];
  }

  public currentSentence: number = 0;

  public prev() {
    if(this.currentSentence > 0) {
      this.currentSentence--;
      console.log(this.currentSentence)
    }
  }

  public next() {
    if(this.currentSentence < this.story.length -1) {
      this.currentSentence++;
      console.log(this.currentSentence)
    }
  }

  ngOnInit(): void {
  }

}
