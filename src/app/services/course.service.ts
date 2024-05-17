import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Privat egenskap.
  url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  // Konstruktor.
  constructor(private http: HttpClient) { }

  // Funktion som hämtar en lista av kurser och returnerar en Observable.
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

}
