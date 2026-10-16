// import type { Priority, Task } from "../../../types/task";
//
//
// // ------------- crear tarea -------------
// /**
//  *  Funcion que crea nueva tarea
//  * @param list: Task[] Array de tareas
//  * @param title:string Titulo de la tarea
//  * @param priority:Priority --> Prioridad de la tarea 
//  */
// export function createTask(list: Task[], title: string, priority: Priority): Task[] {
//   const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1;
//   return [...list, { id, title, priority, done: false }];
// }
//
//
// // -------------- toggleDone -------------
// /**
//  *  Descripción de la función
//  * @param list Array de tareas
//  * @param id:number Id tarea
//  * @returns Array de tareas actualizado
//  */
// export const toggleDone = (list: Task[], id: number): Task[] => list
//   .map((t) => t.id === id ? { ...t, done: !t.done } : t);
//
//
//
// // ------------- rename -----------
// /**
//  *  Descripción de la función
//  * @param list Array de tareas
//  * @param id:number Id tarea
//  * @param title:string NewTitle 
//  * @returns Array Tareas actualizado
//  */
// export function rename(list: Task[], id: number, title: string): Task[] {
//   const clean = title.trim();
//   if (clean === '') return list;
//   return list.map(t => t.id === id ? { ...t, title: clean } : t)
// }
//
// // ------------- removeDone ----------
// /**
//  *  Funcion eliminar tarea si esta hecha
//  * @param list Array de tareas
//  * @param id:number Id tarea
//  * @returns Array Tareas actualizado
//  */
// export const removeDone = (list: Task[], id: number): Task[] => {
//   return list.filter(t => t.id === id)[0]?.done ? list.filter(t => t.id !== id) : list;
// }
//
// // ---------- editTask -------------
// /**
//  *  Funcion que permite editar una tarea
//  * @param list Array de tareas
//  * @param id:number Id tarea
//  * @param changes ---> 
//  * @returns Array de tareas actualizado
//  */
// export function editTask(list: Task[], id: number, changes: Partial<Omit<'id'>>): Task[] {
//   return list.map((t) => t.id === id ? { ...t, ...changes } : t)
// }
//
//
// const order: Record<Priority, number> = { high: 2; medium: 1, low: 0 }
//
// // ----------- pendingByPriority -------------
// /**
//  *  Funcion que devuelve las tareas no hechas por prioridad
//  * @param list:Task[] Array de tareas
//  * @returns Array string con los titulos
//  */
// export function pendingByPriority(list: Task[]): string[] {
//   return list
//     .filter((t) => !t.done)
//     .toSorted((a, b) => order[b.priority] - order[a.priority])
//     .map(t => t.title);
// }
