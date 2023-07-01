import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Service } from 'src/app/shared/models/service.model';

@Injectable()
export class ServiceService {
  constructor(private http: HttpClient) {}

  API_URL = '/assets/data/services.json';

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_URL).pipe(
      tap((result) => {
        console.log('service data :', result);
      })
    );
  }
}
