import { Component, OnInit } from '@angular/core';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';

@Component({
  standalone: true,
  imports: [CalendarModule],
  selector: 'donweb-calendar',
  template: `
  <kendo-calendar/>
  `
})

export class DonWebCalendarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}