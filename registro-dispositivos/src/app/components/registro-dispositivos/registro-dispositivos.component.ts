import { Component, Input, OnInit } from '@angular/core';
import { DispositivosService } from '../../services/dispositivos.service';

@Component({
  selector: 'app-registro-dispositivos',
  standalone: false,
  templateUrl: './registro-dispositivos.component.html',
  styleUrl: './registro-dispositivos.component.css'
})
export class RegistroDispositivosComponent implements OnInit {

  title = 'Registro de Dispositivos AS Control'

  devices: any[] = [];
  @Input() device: any;
  
  itemsPerPage: number = 5; // Valor inicial
  devicesPerPage: number[] = [5, 10, 15, 20];

  constructor(private service: DispositivosService) { }

  ngOnInit(): void {
    this.service.getDevices()
      .subscribe((response: any) => {
        this.devices = response.devices
      })
  }

  cambiarVista(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(selectElement.value, 10);
  }

  resetFiltros() {
    /*console.log(this.limit);
    this.devices.slice(0, this.limit)*/
  }

}
