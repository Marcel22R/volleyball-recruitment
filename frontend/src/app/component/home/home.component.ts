import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {first} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  currentUser: User;
  userFromApi: User | undefined;


  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getById(this.currentUser.id!).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    })
  }

}
