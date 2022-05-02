import { Component, OnInit} from '@angular/core';
import * as htmlToImage from 'html-to-image';




@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  sizes:number[];
  pixels:number[];
  pixelid:string;
  numberofpixels:number;
  optionselected:number;
  color:string;
  changecolor:string;
  pixel:any;
  change:any;

  constructor() { 
    this.color="#2883e9"
    this.sizes = [8,12,16,32]
    this.optionselected=8;
    this.changecolor="#a9083d";
    this.pixel = {
      backgroundColor: "#3d3d3d"
    };
    this.numberofpixels = this.optionselected*this.optionselected;
    this.pixels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]
  }
  variable($event:any){
    console.log($event)
    this.color=$event;
  }

  createdivs(optionchange:number){
  this.numberofpixels = optionchange*optionchange;
  this.pixels=[];
  for(let i=0; i<this.numberofpixels;i++){
    this.pixels.push(i);
     }

    for(let i=0; i<this.numberofpixels;i++){
    this.pixelid = i.toString();
    this.change = document.getElementById(this.pixelid)
    this.change.style.backgroundColor ="#3b3636";
     }
  }

  changecolorclick(selector:number){
    this.pixelid = selector.toString();
    this.change = document.getElementById(this.pixelid);
    this.change.style.backgroundColor =this.color
    
  }

    reset(){
    for(let i=0; i<this.numberofpixels;i++){
    this.pixelid = i.toString();
    this.change = document.getElementById(this.pixelid)
    this.change.style.backgroundColor ="#3b3636";
     }
    }

      generatejpg(){
    var canvaselector:any = document.getElementById("canvas");
    htmlToImage.toJpeg(canvaselector)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
      const save = document.createElement('a');
      if (typeof save.download !== 'undefined') {
        save.href = dataUrl;
        save.target = '_blank';
        save.download = "pixel_draw";
        save.dispatchEvent(new MouseEvent('click'));
      } else {
        window.location.href = dataUrl;
}
        
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

   generatepng(){
    var canvaselector:any = document.getElementById("canvas");
    htmlToImage.toPng(canvaselector)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
      const save = document.createElement('a');
      if (typeof save.download !== 'undefined') {
        save.href = dataUrl;
        save.target = '_blank';
        save.download = "pixel_draw";
        save.dispatchEvent(new MouseEvent('click'));
      } else {
        window.location.href = dataUrl;
}
        
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }


  generatesvg(){
    var canvaselector:any = document.getElementById("canvas");
    htmlToImage.toSvg(canvaselector)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
      const save = document.createElement('a');
      if (typeof save.download !== 'undefined') {
        save.href = dataUrl;
        save.target = '_blank';
        save.download = "pixel_draw";
        save.dispatchEvent(new MouseEvent('click'));
      } else {
        window.location.href = dataUrl;
}
        
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }




    ngOnInit(): void {
    
  }
}