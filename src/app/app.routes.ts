import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: "courses", component: CoursesComponent },
    { path: "", redirectTo: "/courses", pathMatch: "full" },
    
    { path: "404", redirectTo: "/courses", pathMatch: "full" },
    { path: "**", redirectTo: "/courses", pathMatch: "full" }
];
