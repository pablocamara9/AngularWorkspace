import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DispositivosService } from '../../services/dispositivos.service';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-registro-dispositivos',
  standalone: false,
  templateUrl: './registro-dispositivos.component.html',
  styleUrl: './registro-dispositivos.component.css'
})
export class RegistroDispositivosComponent implements OnInit {

  title = 'Registro de Dispositivos AS Control'

  devices: Device[] = [];
  @Input() device: any;
  
  itemsPerPage: number = 5;
  devicesPerPage: number[] = [5, 10, 15, 20];

  cleanCol1: string = '';
  cleanCol2: string = '';
  cleanCol3: string = '';
  cleanCol4: string = '';
  cleanCol5: string = '';
  cleanCol6: string = '';
  cleanCol7: string = '';
  cleanCol8: string = '';
  cleanCol9: string = '';
  cleanCol10: string = '';

  currentPage: number = 1;

  constructor(private service: DispositivosService) { }

  ngOnInit(): void {
    this.loadList()
  }

  loadList(): void {
    this.service.getDevices()
      .subscribe((response: any) => {
        this.devices = response.devices
      })
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    this.service.getDevices()
      .subscribe((response: any) => {
        this.devices = response.devices
      })
  }*/

  cambiarVista(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(selectElement.value, 10);
  }

  aplicarFiltro() {
    let filteredDevices = this.devices.filter(device =>
      (!this.cleanCol1 || device.device_id.toString().includes(this.cleanCol1)) &&
      (!this.cleanCol2 || device.idas_control.toUpperCase().includes(this.cleanCol2.toUpperCase())) &&
      (!this.cleanCol3 || device.estado.toString().toUpperCase() === (this.cleanCol3.toUpperCase())) &&
      (!this.cleanCol4 || device.vbat.toString().includes(this.cleanCol4)) &&
      (!this.cleanCol5 || device.vbat_ant.toString().includes(this.cleanCol5)) &&
      (!this.cleanCol6 || device.temperatura.toString().includes(this.cleanCol6)) &&
      (!this.cleanCol7 || device.serial_number.toUpperCase().includes(this.cleanCol7.toUpperCase())) &&
      (!this.cleanCol8 || this.comparaFechas(device.momento_muestra, this.cleanCol8)) &&
      (!this.cleanCol9 || device.as_regimenfk.toString().includes(this.cleanCol9)) &&
      (!this.cleanCol10 || this.comparaFechas(device.updated_at, this.cleanCol10))
    );

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.devices = filteredDevices.slice(startIndex, startIndex + this.itemsPerPage);

    if (
      this.cleanCol1 === '' &&
      this.cleanCol2 === '' &&
      this.cleanCol3 === '' &&
      this.cleanCol4 === '' &&
      this.cleanCol5 === '' &&
      this.cleanCol6 === '' &&
      this.cleanCol7 === '' &&
      this.cleanCol8 === '' &&
      this.cleanCol9 === '' &&
      this.cleanCol10 === ''
    ) {
      this.loadList()
    }

  }
    
  comparaFechas(deviceDate: string | Date, filterDate: string): boolean {
    const deviceDateTime = new Date(deviceDate).toISOString().split('T')[0];
    const filterDateTime = new Date(filterDate).toISOString().split('T')[0];
    return deviceDateTime === filterDateTime;
  }

  clearFilter() {
    this.cleanCol1 = '';
    this.cleanCol2 = '';
    this.cleanCol3 = '';
    this.cleanCol4 = '';
    this.cleanCol5 = '';
    this.cleanCol6 = '';
    this.cleanCol7 = '';
    this.cleanCol8 = '';
    this.cleanCol9 = '';
    this.cleanCol10 = '';

    this.loadList()
  }
  

}
