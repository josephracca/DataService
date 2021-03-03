import { Injectable } from '@angular/core';

//=============LECTURE NOTES=============

//@injectable decorator...guides the accessibility of the service to other levels of the program/app

//root is the default

@Injectable({
  providedIn: 'root'
})

export class DataService {
//make an array for the moment
// ideally we would make this private so it's not accessible directly from another component
// we don't want anyone to access or change this data
// preference to have interactions with this data

  private valueInDataService = ["have fun whilst coding", "evaluate project progress", "work on brevity of code"];

  private valueInDataServiceArchive = ["have fun whilst coding", "evaluate project progress", "work on brevity of code"];

  constructor() { }

  GetValue(): string[]{
    return this.valueInDataService;
  }

  AddValue(value: string): void{
    this.valueInDataService.push(value);
  }
  RemoveValue(value: number): void {
    // this.valueInDataService.splice(this.valueInDataService.indexOf();

    //the splice happens here becuase the original array exists here
    // console.log(value);
    // this.valueInDataService.splice(value, 1)
    // console.log(this.valueInDataService);

    let spliceMe = () => { this.valueInDataService.splice(value, 1)}

    setTimeout(spliceMe, 1000)
  }
}
