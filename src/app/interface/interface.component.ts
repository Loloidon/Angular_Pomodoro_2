import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterLinkActive],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss'
})
export class InterfaceComponent {

  title = 'Angular_Pomodoro';
  seconds: number = 0;
  minutes: number = 0;
  hour: number = 0;
  start: string = "Start";
  isPaused: boolean = true;
  IntervalId:any;
  CountIntervalId:any;
  ovseconds: number=0;
  ovminutes: number=0;
  ovhours: number=0;
  ovIntervalId:any;
  ovstart: boolean = false;


  Start() {
    if (this.isPaused) {
      this.isPaused = false;
      this.start = "Pause";

     this.IntervalId= setInterval(() => {
        if (!this.isPaused) {
          this.seconds++;
          if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
          }
          if (this.minutes === 60) {
            this.hour++;
            this.minutes = 0;
          }
        }
      }, 1000);
    } else {
      this.isPaused = true;
      this.start = "Start";
      clearInterval(this.IntervalId)
    }
  }
  ClassicPomodoro() {
    if (this.isPaused) {
      this.isPaused = false;
      this.start = "Pause";

     this.IntervalId= setInterval(() => {
        if (!this.isPaused) {
          this.seconds++;
          if (this.seconds == 60) {
            this.minutes++;
            this.seconds = 0;
          }
          if (this.minutes==25)
          {
            this.start="Short pause"
            this.isPaused=true;
            this.seconds=0;
            this.minutes=0;
            this.hour=0;
            if(this.isPaused)
            {
              this.CountIntervalId= setInterval(() => {
              this.seconds++
              if(this.seconds==60)
              {
                this.minutes++;
                this.seconds=0;
              }
              if(this.minutes==5)
              {
                this.seconds=0;
                this.minutes=0;
                this.hour=0;
                this.start="Work"
                this.isPaused=false;
                clearInterval(this.CountIntervalId);
              }
            
  
              },1);
            }
          }
        }
      }, 1);
    } else {
      this.isPaused = true;
      this.start = "Start";
      clearInterval(this.IntervalId)
    }
  }
  DoublePomodoro() {
    if (this.isPaused) {
      this.isPaused = false;
      this.start = "Pause";

     this.IntervalId= setInterval(() => {
        if (!this.isPaused) {
          this.seconds++;
          if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
          }
          if (this.minutes==50)
          {
            this.start="Short pause"
            this.isPaused=true;
            this.seconds=0;
            this.minutes=0;
            this.hour=0;
            if(this.isPaused)
            {
              this.CountIntervalId= setInterval(() => {
              this.seconds++
              if(this.seconds==60)
              {
                this.minutes++;
                this.seconds=0;
              }
              if(this.minutes==10)
              {
                this.seconds=0;
                this.minutes=0;
                this.hour=0;
                this.start="Work"
                this.isPaused=false;
                clearInterval(this.CountIntervalId);
              }
            
  
              },1);
            }
          }
        }
      }, 1);
    } else {
      this.isPaused = true;
      this.start = "Start";
      clearInterval(this.IntervalId)
    }
  }
  Overalltime()
  {
    this.ovstart=true;
    if(this.ovstart=true)
    {
     this.ovIntervalId= setInterval(() => {
        
          this.ovseconds++;
          if (this.ovseconds === 60) {
            this.ovminutes++;
            this.ovseconds = 0;
          }
          if (this.ovminutes === 60) {
            this.ovhours++;
            this.ovminutes = 0;
          }
        
      }, 1000);
    }  
    
  }
  StartClassicPomodoro()
  {
    this.ClassicPomodoro();
    if(this.ovstart==false)
    this.Overalltime();
  }
  StartDoublePomodoro()
  {
    this.DoublePomodoro();
    if(this.ovstart==false)
    this.Overalltime();
  }
}
