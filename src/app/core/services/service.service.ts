import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Service } from 'src/app/shared/models/service.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class ServiceService {
  constructor(private http: HttpClient) {}

  API_URL = '/assets/data/data.json';

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_URL).pipe(
      tap((result) => {
        console.log('data :', result);
      })
    );
  }
}
