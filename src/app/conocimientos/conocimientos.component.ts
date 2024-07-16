import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-conocimientos',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './conocimientos.component.html',
  styleUrl: './conocimientos.component.scss'
})
export class ConocimientosComponent {

}
