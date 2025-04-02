import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceStatus',
  standalone: false
})
export class DeviceStatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'nuevo':
        return 'text-green';
      case 'usado':
        return 'text-red';
      case 'reparado':
        return 'text-yellow';
      default:
        return 'text-default';
    }
  }

}
