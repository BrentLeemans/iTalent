import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(): any {
    const activity = [
      {
        id: 1,
        name: 'Videobewerking',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 2,
        name: 'Projectweek',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 3,
        name: 'POP-sessies',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 4,
        name: 'Game development',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 5,
        name: 'Seminaries',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 6,
        name: 'Innovatieroute AI',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 8,
        name: 'Google Hash Code',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 9,
        name: 'Elektronica',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 10,
        name: 'Beleggingscursus',
        img: '../../../assets/img/projects/cabin.png'
      }
    ];

    const project = [
      {
        id: 1,
        name: 'Hybrid Crypto',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 2,
        name: '&Tiro',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 3,
        name: 'SmartHome',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 4,
        name: 'Personal Website',
        img: '../../../assets/img/projects/cabin.png'
      },
      {
        id: 5,
        name: 'Action RPG',
        img: '../../../assets/img/projects/cabin.png'
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
