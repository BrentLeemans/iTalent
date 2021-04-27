import { Component, OnInit } from '@angular/core';
import {Activity} from '../../shared/classes/activity';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.activityService.getProjects().subscribe(data => this.projects = data);
  }
}
