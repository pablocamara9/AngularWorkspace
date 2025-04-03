import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceStatus',
  standalone: false
})
export class DeviceStatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'activo':
        return 'badge bg-success';
      case 'inactivo':
        return 'badge bg-danger';
      default:
        return 'text-default';
    }
  }

}
