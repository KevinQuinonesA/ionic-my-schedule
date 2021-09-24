import { Component, OnInit } from '@angular/core';
import { days } from '../database/days';
import { subjects } from '../database/subjects';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  subjects = subjects;
  days = days;
  constructor() {}

  ngOnInit() {
  }

  getSubjectsByDay(day) {
    var subjectFiltered = [];
    for (var i = 0; i < this.subjects.length; i++) {
      const dayChecker = subjects[i].date.filter((a) => a.day === day);
      if (dayChecker != null && dayChecker.length != 0) {
        subjectFiltered.push({name: this.subjects[i].name, hour: dayChecker[0].hora.string});
      }
    }
    return subjectFiltered;
  }

  
}
