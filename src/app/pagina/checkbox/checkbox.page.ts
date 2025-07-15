
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

interface Alumno{
  name: string;
  beca: string;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  imports: [IonicModule, RouterModule, ComponentesModule],
})


export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

infoNombres: Alumno[] = [
  {
  name: 'Catalina Elizabeth',
  beca: 'false'
},
  {
  name: 'Martinez Garcia',
  beca: 'true'
  },
   {
  name: 'Jose Luis ',
  beca: 'true'
},
  {
  name: 'Martinez Garcia',
  beca: 'false'
  },
  {
  name: 'Guillermo Enrique ',
  beca: 'true'
},
  {
  name: 'Martinez Garcia',
  beca: 'false'
  

}

]
}