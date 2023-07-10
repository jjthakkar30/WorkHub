import { Component, Input } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @Input() title !: String;

  onTitleClick() {
    this.router.navigate([this.title.toLowerCase()]);
  }
}
