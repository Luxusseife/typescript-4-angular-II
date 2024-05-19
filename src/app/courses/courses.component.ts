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
  ascending: boolean = true;

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

  // Sortering av kurskod i växlande fallande/stigande ordning.
  sortByCode(): void {
    if (this.ascending) {
      this.filteredCourseList.sort((a, b) => a.code.localeCompare(b.code));
    } else {
      this.filteredCourseList.sort((a, b) => b.code.localeCompare(a.code));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av kursnamn i växlande fallande/stigande ordning.
  sortByName(): void {
    if(this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.coursename.localeCompare(b.coursename)));
    } else {
      this.filteredCourseList.sort((a, b) => (b.coursename.localeCompare(a.coursename)));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av progression i växlande fallande/stigande ordning.
  sortByProgression(): void {
    if(this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.progression.localeCompare(b.progression)));
    } else {
      this.filteredCourseList.sort((a, b) => (b.progression.localeCompare(a.progression)));
    }
    this.ascending = !this.ascending;
  }
}