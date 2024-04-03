export class TimeSheet {

  constructor(public id: number, public fName: string, public lName: string,
              public date: string, public timeIn: string, public timeOut: string) {

    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.date = date;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
  }
}
