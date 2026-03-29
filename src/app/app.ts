import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Child } from "./child/child";
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FormsModule, Child, NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [
    trigger('FadeInOut', [
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0)'
      })),
      transition('visible <=> hidden', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class App {
  protected readonly title = signal('first-vite-project');
  myname = null;
// changename(){
//  // this.myname = 'angular' // }
  items = ['one', 'two', 'three'];
  parentData = 'data from parent';

  // trackBy function for ngFor
  isvisible = true;
  toggle(){
    this.isvisible = !this.isvisible;
  }
}