import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NgGdComponent } from "../ng-gd/ng-gd.component";
import { ConocimientosComponent } from "../conocimientos/conocimientos.component";
import { ExperienciaComponent } from "../experiencia/experiencia.component";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-homepage',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatTabsModule,NgGdComponent,ConocimientosComponent,ExperienciaComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  ngOnInit(): void {
    
  }

}
