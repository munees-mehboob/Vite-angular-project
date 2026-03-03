import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Child } from "./child/child";
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FormsModule, Child, NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('first-vite-project');
  myname = null;
// changename(){
//  // this.myname = 'angular' // }
  items = ['one', 'two', 'three'];
  parentData = 'data from parent';

  // trackBy function for ngFor
  
}