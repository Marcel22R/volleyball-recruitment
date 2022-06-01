import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";

@Component({
  selector: 'app-team-person',
  templateUrl: './team-person.component.html',
  styleUrls: ['./team-person.component.scss']
})
export class TeamPersonComponent implements OnInit {

  @Input() user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
