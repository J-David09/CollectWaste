import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/utils/environment';
import { WasteType } from '../interfaces/waste-type';

@Injectable({
  providedIn: 'root'
})
export class WasteTypeService {
  baseUrl : String = environment.urlBaseApi

  constructor(private http: HttpClient) {}

  getAll ():Observable<any> {
    return this.http.get(`${this.baseUrl}/api/waste/list`);
  }

  update (wasteType: WasteType): Observable<any> {
    return this.http.post<WasteType>(`${this.baseUrl}/api/waste/update`, wasteType);
  }

  delete (wasteType: WasteType): Observable<any> {
    const httpOptions = {
      body: wasteType
    };
    return this.http.delete<WasteType>(`${this.baseUrl}/api/waste/delete`, httpOptions);
  }

  add (wasteType: WasteType): Observable<any> {
    return this.http.post<WasteType>(`${this.baseUrl}/api/waste/create`, wasteType);
  }
}
