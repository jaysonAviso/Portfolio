import { Component, OnInit } from '@angular/core';
import { projectsData } from './project-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsData = projectsData;
  

  constructor() { }

  ngOnInit(): void {
  }

}
