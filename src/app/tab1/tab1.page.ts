import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  encendido:boolean = false;
  constructor(private flaslight: Flashlight) {}

  encenderLuz(){
    this.flaslight.toggle();
    this.encendido = this.flaslight.isSwitchedOn();
  }
}
