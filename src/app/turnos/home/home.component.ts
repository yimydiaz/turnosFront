import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercio';
import { Servicio } from 'src/app/models/servicio';
import { Turno } from 'src/app/models/turno';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicios: Servicio[] | undefined;
  comercios: Comercio[] | undefined;
  turnos: Turno[] | undefined;
  comercioSeleccionado: undefined;
  servicioSeleccionado: undefined;
  fechaInicio = 'fecha inicio                                               📆';
  fechaFin = 'fecha fin                                                 📆';

  constructor(private turnoService: TurnoService) { }

  ngOnInit(): void {
    this.loadServicios();
    this.loadComercios();
    this.loadTurnos();
  }

  loadServicios() {
    this.turnoService.getListServicios().subscribe(
      (response) => {
        this.servicios = response;
        console.log(this.servicios);
      });
  }

  loadComercios() {
    this.turnoService.getListComercio().subscribe(
      (response) => {
        this.comercios = response;
        console.log(this.comercios);
      });
  }

  loadTurnos() {
    this.turnoService.getListTurnos().subscribe(
      (response) => {
        this.turnos = response;
        console.log(this.turnos);
      });
  }

}
