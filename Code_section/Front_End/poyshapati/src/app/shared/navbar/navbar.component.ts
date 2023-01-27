import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menus = [
    {
      name: 'Home',
      url: ""
    },
    {
      name: 'Investment',
      url: "",
      children: [
        {
          name: "General Investment",
          url: "general-investment"
        },
        {
          name: "Share Market",
          url: "share-market"
        },
        {
          name: "Mutual Fund",
          url: "mutual-fund"
        },

      ]
    },
    {
      name: 'Admin',
      url: "admin"
    }

  ]
  expanded: boolean;
  addToLocalStorage(menu) {
    localStorage.setItem('active', menu.name)
  }
  removeFromLocalstorage(menu) {
    localStorage.removeItem('active')
  }
  isActive(menu) {
    return localStorage.getItem('active') === menu.name
  }
}
