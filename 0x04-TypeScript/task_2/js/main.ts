export interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

export interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

export class Director implements DirectorInterface {
  workFromHome: () => 'Working from home';
  getCoffeeBreak: () => 'Getting a coffee break';
  workDirectorTasks: () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome: () => 'Cannot work from home';
  getCoffeeBreak: () => 'Cannot have a break';
  workTeacherTasks: () => 'Getting to work';
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
