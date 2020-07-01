import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }


  download(url, type, quality) {
    return this.http.get(environment.apiUrl + `/download?URL=${url}&type=${type}&quality=${quality}`, { responseType: 'blob'});
  }
}
