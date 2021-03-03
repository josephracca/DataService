import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidecontent',
  templateUrl: './sidecontent.component.html',
  styleUrls: ['./sidecontent.component.css']
})
export class SidecontentComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit(): void {
  }

  AddValue(value: string): void {
    //this is where we call the data service
    this.dService.AddValue(value);
  }

}
