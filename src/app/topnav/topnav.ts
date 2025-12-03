import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-topnav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topnav.html',
  styleUrl: './topnav.scss',
})
export class Topnav {}
