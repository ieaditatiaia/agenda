import { Observable } from 'rxjs';
import { Event } from '../event.model';
import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config!

import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './mensal.component.html',
  styleUrls: []
})
export class MensalComponent implements OnInit {

  events: Observable<Event[]>;

  calendarPlugins = [dayGridPlugin]; // important!
  themeSystem: 'bootstrap';

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.events = null;
    this.listar();
  }

  listar() {
    this.events = this.agendaService.listar();
  }

}
