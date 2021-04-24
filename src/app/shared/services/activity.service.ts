import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../classes/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activityAPI = environment.IN_MEMORY_API;

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.activityAPI);
  }

  addActivity(activity: Activity): Observable<any>{
    return this.http.post(this.activityAPI, activity);
  }

  deleteActivity(id: number): Observable<any>{
    return this.http.delete(`${this.activityAPI}/${id}`);
  }

}
