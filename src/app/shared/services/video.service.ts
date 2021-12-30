import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "../models/video";
import {Marcacao} from "../models/marcacao";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  URL_VIDEO = 'https://marcador-de-video.herokuapp.com/video/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Video[]>{
    return this.httpClient.get<Video[]>(this.URL_VIDEO);
  }
  post(video: Video): Observable<Video>{
    return this.httpClient.post<Video>(this.URL_VIDEO, video);
  }
  getById(id: number): Observable<Video>{
    return this.httpClient.get<Video>(`${this.URL_VIDEO}/${id}`);
  }
  put(video: Video): Observable<Video> {
    return this.httpClient.put<Video>(`${this.URL_VIDEO}/${video.id}`, video);
  }

  delete(id: number | undefined): Observable<any>{
    return this.httpClient.delete(`${this.URL_VIDEO}${id}`)
  }

  getMarcacoes(id: number | undefined): Observable<Marcacao[]>{
    return this.httpClient.get<Marcacao[]>(`${this.URL_VIDEO}${id}/marcacoes`)
  }
  deleteMarcacao(id: number | undefined, idMarcacao: number | undefined): Observable<any>{
    return this.httpClient.delete(`${this.URL_VIDEO}${id}/marcacoes/${idMarcacao}`)
  }

  inserirMarcacao(idVideo: number, marcacao: Marcacao): Observable<Marcacao>{
    return this.httpClient.post<Marcacao>(`${this.URL_VIDEO}${idVideo}/marcacoes/`, marcacao);
  }

}
