import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports :[RouterLink,RouterLinkActive,RouterModule],
})
export class AppComponent {

  title = 'Angular_Pomodoro';
  seconds: number = 0;
  minutes: number = 0;
  hour: number = 0;
  start: string = "Start";
  isPaused: boolean = true;
  IntervalId:any
}
