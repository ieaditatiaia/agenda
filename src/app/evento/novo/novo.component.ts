import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../../event.model';
import { AgendaService } from './../../agenda.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: []
})
export class NovoComponent implements OnInit {

  event = new Event();

  constructor(private agendaService: AgendaService, private router: Router) { }

  ngOnInit() {
  }

  salvar() {
    const start = this.event.start + ':00';
    this.event.start = start;
    this.agendaService.criar(this.event)
     .subscribe(() => {}, error => console.error(error)
    );
    this.listar();
  }

  listar() {
    this.router.navigate(['/mensal']);
  }

}
