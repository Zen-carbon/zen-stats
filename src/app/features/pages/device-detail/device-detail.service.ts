import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, Observable } from 'rxjs';
import { DeviceDetail } from '../../../core/models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetailService {
  private readonly apiUrl = environment.APIURL;

  private http = inject(HttpClient);

  getDeviceData = (deviceId: string | number): Observable<DeviceDetail[]> => {
    return this.http
      .get<DeviceDetail[]>(`${this.apiUrl}/devices/${deviceId}`)
      .pipe(
        catchError((error) => {
          throw new Error(`Error fetching device data: ${error.message}`);
        })
      );
  };
}
