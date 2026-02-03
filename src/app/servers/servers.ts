
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class ServersComponent {
  username: string = '';
  
  resetUsername() {
    this.username = '';
  }
}
