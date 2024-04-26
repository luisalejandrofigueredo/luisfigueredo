import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule,LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Luis A Figueredo';
  private activeTheme: string = 'light';
  constructor(private breakpointObserver: BreakpointObserver) {}
  
    getTheme() {
      return this.activeTheme;
    }
    setTheme(theme: string) {
      if (theme === 'light' || theme === 'dark') {
        this.activeTheme = theme;
        // Actualizar estilos en la aplicación (método específico de su proyecto)
      }
    }

    ngOnInit() {
      this.breakpointObserver.observe([
        '(prefers-color-scheme: dark)'
      ]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.setTheme('dark');
        } else {
          this.setTheme('light');
        }
      });

    }
    ngOnDestroy(){
    
    }
}
