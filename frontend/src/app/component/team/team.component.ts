import { Component, OnInit } from '@angular/core';
import {USERS} from "../../../assets/cPeople";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

users=USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
