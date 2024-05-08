import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/utils/environment';
import { Report } from '../interfaces/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl : String = environment.urlBaseApi

  constructor(private http: HttpClient) {}

  create (report: Report): Observable<any> {
    return this.http.post<Report>(`${this.baseUrl}/api/report/create`, report);
  }
}
