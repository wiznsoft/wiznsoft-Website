import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topnav } from './topnav/topnav';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topnav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'wiznsoftFrontend';
}
