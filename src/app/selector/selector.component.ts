import {Component, OnInit} from '@angular/core';
import {DateService} from "../shared/date.service";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit{

  // public dateService: DateService;

  constructor(public dateService: DateService) { }

  ngOnInit() {
  }

}
