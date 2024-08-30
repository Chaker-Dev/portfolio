import { Component } from '@angular/core';
import { HeroComponent } from '../../components/about/hero/hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
