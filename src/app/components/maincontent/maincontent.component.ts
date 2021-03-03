import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  valueInMain = [];
  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.valueInMain = this.dService.GetValue();
    // this makes it asynchronus
  }
  
  //this will call the function in the data service to fire
  passIndex(value){
    this.dService.RemoveValue(value);
  }

}
