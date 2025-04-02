import { Component, Input, OnInit } from '@angular/core';
import { DispositivosService } from '../../services/dispositivos.service';
import { CommonModule } from '@angular/common';

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
  
  itemsPerPage: number = 5;
  devicesPerPage: number[] = [5, 10, 15, 20];

  cleanCol1 = ''
  cleanCol2 = ''
  cleanCol3 = ''
  cleanCol4 = ''
  cleanCol5 = ''
  cleanCol6 = ''
  cleanCol7 = ''
  cleanCol8 = ''
  cleanCol9 = ''
  cleanCol10 = ''

  currentPage: number = 1;
  displayedDevices = this.devices;

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

  aplicarFiltro() {
    let filteredDevices = this.devices.filter(device =>
      (!this.cleanCol1 || device.idas_control.toString().includes(this.cleanCol1)) &&
      (!this.cleanCol2 || device.device_id.includes(this.cleanCol2)) &&
      (!this.cleanCol3 || device.estado.toString() === this.cleanCol3) &&
      (!this.cleanCol4 || device.vbat.toString().includes(this.cleanCol4)) &&
      (!this.cleanCol5 || device.vbat_ant.toString().includes(this.cleanCol5)) &&
      (!this.cleanCol6 || device.temperatura.toString().includes(this.cleanCol6)) &&
      (!this.cleanCol7 || device.serial_number.includes(this.cleanCol7)) &&
      (!this.cleanCol8 || this.comparaFechas(device.momento_muestra, this.cleanCol8)) &&
      (!this.cleanCol9 || device.as_regimenfk.toString().includes(this.cleanCol9)) &&
      (!this.cleanCol10 || this.comparaFechas(device.updated_at, this.cleanCol10))
    );

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedDevices = filteredDevices.slice(startIndex, startIndex + this.itemsPerPage);
  }

  comparaFechas(deviceDate: string | Date, filterDate: string): boolean {
    const deviceDateTime = new Date(deviceDate).toISOString().split('T')[0];
    const filterDateTime = new Date(filterDate).toISOString().split('T')[0];
    return deviceDateTime === filterDateTime;
  }
  

}
