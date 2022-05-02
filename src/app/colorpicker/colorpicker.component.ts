import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})

export class ColorpickerComponent {
  @Output() sendcolor: EventEmitter<string>;

  title = 'colorPicker';
  color: string = '#2889e9';
  arrayColors: any = {
  color1: '#2883e9',};  
  selectedColor: string = 'color1';


  constructor(){
    this.sendcolor = new EventEmitter();
  }

  changecolor(){
    this.sendcolor.emit(this.arrayColors[this.selectedColor])
  }

}