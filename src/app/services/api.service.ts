import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  download(url, type, quality) {
    window.location.href = environment.apiUrl + `/download?URL=${url}&type=${type}&quality=${quality}`;
  }
}
