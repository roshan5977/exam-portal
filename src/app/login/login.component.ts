import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'Subham' && this.password === 'Subham') {
      this.router.navigate(['/exam']);
    } else if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.error = true;
    }
  }
  
}
