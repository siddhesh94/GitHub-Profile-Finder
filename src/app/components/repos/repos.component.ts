import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl:string
  repos:object = [];
  constructor(private GitHubService: GithubService, private  ref:ChangeDetectorRef ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if (this.repoUrl) {
      this.GitHubService.getRepos(this.repoUrl).subscribe((repo)=>{
        this.repos = repo;
      },
      (err)=>{
        console.log(err);
      })
    }
  }

}
