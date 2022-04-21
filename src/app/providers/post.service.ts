import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api: string = environment.api;

  constructor(private http:HttpClient) { }

  obtenerPosts() {

    const url = `${this.api}/posts`;

    // Datos generales de la ficha
    return this.http.get(url)
      .pipe(
        map(
          // Consulta exitosa
          (res: any) => res,
        ),
        // Catch de errores
        catchError(error => throwError(() => error))
      );
  }

  enviarPost(data:any) {

    const url = `${this.api}/posts`;

    // Datos generales de la ficha
    return this.http.post(url,data)
      .pipe(
        map(
          // Consulta exitosa
          (res: any) => res,
        ),
        // Catch de errores
        catchError(error => throwError(() => error))
      );
  }

  actualizarPost(data:any) {

    const url = `${this.api}/posts/1`;

    // Datos generales de la ficha
    return this.http.put(url,data)
      .pipe(
        map(
          // Consulta exitosa
          (res: any) => res,
        ),
        // Catch de errores
        catchError(error => throwError(() => error))
      );
  }
}
