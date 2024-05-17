import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // Egenskaper.
  courseList: Course[] = [];
  image: string = "assets/images/rabbit.png";

  // Konstruktor.
  constructor(private courseService: CourseService) { }

  // Initialisering.
  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courseList = data;
    })
  }
}