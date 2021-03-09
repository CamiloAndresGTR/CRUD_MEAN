import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../models/producto';
import {map} from 'rxjs/operators';
import { CountriesResponse } from '../models/countries-response';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url = 'http://localhost:4000/api/productos/';
  constructor(private http: HttpClient) { }
getProductos(): Observable<any>{
  return this.http.get(this.url);
}
eliminarProducto(id: String): Observable<any>{
  return this.http.delete(this.url + id);
}
guardarProducto(producto: producto): Observable<any>{
  return this.http.post(this.url, producto);
}
obtenerProducto(id: String): Observable<any>{
  return this.http.get(this.url+id);
}
editarProducto(id: String, producto: producto): Observable<any>{ 
  return this.http.put(this.url +id, producto);
}
getPaises(){
  return this.http.get<Observable<CountriesResponse[]>>('https://restcountries.eu/rest/v2/lang/es');
}
}
