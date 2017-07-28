import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user=[];
  constructor(private _githubservice:GithubService) 
  { 
    this._githubservice.getUser().subscribe(user => 
      {
        this.user=user;
      })
  }
}
