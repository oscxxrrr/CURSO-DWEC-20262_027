// src/utils/grades.ts
import type { Student } from '../types/student';

export function average(list: Student[]): number {
  const total = list.reduce((acc, e) => acc += e.grade, 0);
  return list.length !== 0 ? total / list.length : 0;
}

export function isPassed(student: Student): boolean {
  return student.grade >= 5;
}

export function passedStudents(list: Student[]): Student[] {
  return list.filter(isPassed);      // le damos la receta, sin parentesis
}
