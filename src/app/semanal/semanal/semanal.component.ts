import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AgendaService } from './../../agenda.service';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit {

  semana: Observable<Event[]>;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.semanal();
  }

  semanal() {
    this.semana = this.agendaService.semanal();
  }

}
