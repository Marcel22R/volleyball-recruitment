import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../service/user.service";
import {first} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loading = false;
  users: User[]=[];


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loading=true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}
