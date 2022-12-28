import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  private elementDOM?: HTMLAnchorElement;

  constructor(private router: Router) {}

  navegar(url: string): void {
    this.router.navigate([url]);
  }

  set activateNavBar(event : any) {
    if(typeof this.elementDOM !== 'undefined'){
      this.elementDOM.setAttribute('class', 'nav-link');
    }
    this.elementDOM = event.currentTarget;
    (event.currentTarget as HTMLAnchorElement).setAttribute('class', "nav-link active" )
  }
}
