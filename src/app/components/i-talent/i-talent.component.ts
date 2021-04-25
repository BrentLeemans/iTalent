import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../shared/services/activity.service';
import {Activity} from '../../shared/classes/activity';

@Component({
  selector: 'app-i-talent',
  templateUrl: './i-talent.component.html',
  styleUrls: ['./i-talent.component.css']
})
export class ITalentComponent implements OnInit {
  activities: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void{
    this.activityService.getActivities().subscribe(data => this.activities = data);
  }

}
