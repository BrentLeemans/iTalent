import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../shared/classes/activity';

@Component({
  selector: 'app-i-talent-item',
  templateUrl: './i-talent-item.component.html',
  styleUrls: ['./i-talent-item.component.css']
})
export class ITalentItemComponent implements OnInit {
  @Input() activity: Activity;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{

  }
}
