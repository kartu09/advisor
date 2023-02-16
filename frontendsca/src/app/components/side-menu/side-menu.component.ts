import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  options = [
    { name: 'Opción 1', link: '/opcion-1' },
    { name: 'Opción 2', link: '/opcion-2' },
    { name: 'Opción 3', link: '/opcion-3' },
  ];
}
