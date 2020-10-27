import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from "../../models/problem.model";



@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styles: [`
    .difficulty {
      min-width: 60px;
      margin-right: 10px;
    }

    .label.difficulty {
      padding-top: 0/6em;
      color: #fbfdfa;
      font-size: 12px;
    }

    .title {
      font-size: 1.2em;
    }

    .diff-easy{
      background-color: #42ebf4;
    }

    .diff-medium{
      background-color: #92cf5c;
    }

    .diff-hard {
      background-color: #dd0d1e;
    }

    .diff-super{
      background-color: #8d16e2;
    }
    `]
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor(@Inject("data") private data) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.problems = this.data.getProblems();
  }

}
