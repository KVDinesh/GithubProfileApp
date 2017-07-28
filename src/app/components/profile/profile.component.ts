import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user=[];
  public repos=[];
  constructor(private _githubservice:GithubService) 
  { 
    this._githubservice.getUser().subscribe(user => 
      {
        this.user=user;
      })

      this._githubservice.getRepos().subscribe(repos => 
      {
        this.repos=repos;
      })
  }

  ngOnInit() {
  }

}
