import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from "../mock-problems";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //get all problems
  getProblems(): Problem[] {
    return PROBLEMS;
  }

  //get problem by id
  getProblem(id: number): Problem {
    return PROBLEMS.find((problem) => problem.id === id);
  }
}
