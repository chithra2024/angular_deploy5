import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mockdemo';
  message: string = '';

  constructor(private greetingService: GreetingService) {}

  ngOnInit(): void {
    this.message = this.greetingService.getGreeting();
  }
}