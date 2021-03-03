import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
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
    // this.dService.TypedAddValue(value);
    const todoItem: Todo = {
      item: value,
      category: 'General',
      isToggled: false

    }
    this.dService.TypedAddValue(todoItem);
  }

}
