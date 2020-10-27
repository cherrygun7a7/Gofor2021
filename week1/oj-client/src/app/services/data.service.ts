import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from "../mock-problems";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  problems: Problem[] = PROBLEMS;

  constructor() { }

  //get all problems
  getProblems(): Problem[] {
    return this.problems;
  }

  //get problem by id
  getProblem(id: number): Problem {
    return this.problems.find((problem) => problem.id === id);
  }

  addProblem(problem: Problem): void{
    problem.id = this.problems.length  + 1;
    this.problems.push(problem);
  }
}
