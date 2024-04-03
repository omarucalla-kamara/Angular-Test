import { Component } from '@angular/core';
import { TimeSheet } from "./sheet.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  studentList: TimeSheet[] = [
    new TimeSheet(1, 'Abubakarr', 'Kanu', '03/04/2024', '08:31', '15:05')
  ]

  newStudentList: TimeSheet = {
    id: 0,
    fName: '',
    lName: '',
    date: '',
    timeIn: '',
    timeOut: ''
  }


  newEntry() {
    this.studentList.push({...this.newStudentList});
    this.resetList();
  }

  resetList() {
    this.newStudentList = {
        id: 0,
        fName: '',
        lName: '',
        date: '',
        timeIn: '',
        timeOut: ''
    };
  }
}

