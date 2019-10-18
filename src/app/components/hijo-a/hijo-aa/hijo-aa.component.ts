import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-aa',
  templateUrl: './hijo-aa.component.html',
  styleUrls: ['./hijo-aa.component.css']
})
export class HijoAAComponent implements OnInit {

  mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  cambiarTexto(mensaje: any) {
    
  }

}
