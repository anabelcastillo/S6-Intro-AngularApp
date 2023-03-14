import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})

export class SceneComponent implements OnInit {

  @Input() storyList: Story = {text:''};

  constructor() { }

  ngOnInit(): void {
  }

}
