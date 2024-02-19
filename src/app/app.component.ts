import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxPaginationModule,HttpClientModule],

templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
