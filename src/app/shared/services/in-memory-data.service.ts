import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(): any {
    const activity = [
      {
        id: 1,
        name: 'Videobewerking',
        img: ''
      },
      {
        id: 2,
        name: 'Projectweek',
        img: ''
      },
      {
        id: 3,
        name: 'POP-sessies',
        img: ''
      },
      {
        id: 4,
        name: 'Game development',
        img: ''
      },
      {
        id: 5,
        name: 'Seminaries',
        img: ''
      },
      {
        id: 6,
        name: 'Innovatieroute AI',
        img: ''
      },
      {
        id: 8,
        name: 'Google Hash Code',
        img: ''
      },
      {
        id: 9,
        name: 'Elektronica',
        img: ''
      },
      {
        id: 10,
        name: 'Beleggingscursus',
        img: ''
      }
    ];

    const project = [
      {
        id: 1,
        name: 'Hybrid Crypto',
        img: ''
      },
      {
        id: 2,
        name: '&Tiro',
        img: ''
      },
      {
        id: 3,
        name: 'SmartHome',
        img: ''
      },
      {
        id: 4,
        name: 'Personal Website',
        img: ''
      },
      {
        id: 5,
        name: 'Action RPG',
        img: ''
      },
    ];
    return {activity, project};
  }

  genId(activity: any[]): number {
    return activity.length > 0 ? activity.length + 1 : 1;
  }
}

/*
GET /api/activity              all activity objects
POST /api/activity             create activity object (without id)
DELETE /api/activity/1         delete activity object with id 1
*/
