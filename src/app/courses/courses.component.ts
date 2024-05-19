import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // Egenskaper.
  courseList: Course[] = [];
  image: string = "assets/images/rabbit.png";
  filteredCourseList: Course[] = [];
  filterValue: string = "";

  // Konstruktor.
  constructor(private courseService: CourseService) { }

  // Initialisering.
  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courseList = data;
      this.filteredCourseList = data;
    })
  }

  // Filtrering av kursnamn och/eller kurskod.
  applyFilter(): void {
    this.filteredCourseList = this.courseList.filter((course) =>
      course.coursename.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      course.code.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

}