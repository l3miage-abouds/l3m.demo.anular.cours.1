import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Promotion } from './data/promotion';
import { Student } from './data/student';

/**
 * Describe a promotion and selected students in a 2-tuple.
 * All elements are readonly, thus cannot be modified.
 * First element is the promotion.
 * Second element is the list of selected students.
 * Each selected student has to be part of the promotion.
 */
export type PromoDescr = [Readonly<Promotion>, Readonly<Readonly<Student>[]>];

@Injectable({
  providedIn: 'root'
})
export class PromoManagerService {
  private promoDescrSubj = new BehaviorSubject<PromoDescr>([
    {label: '', students: []},
    []
  ]);
  public readonly promoDescrObs = this.promoDescrSubj.asObservable();

  constructor() {}

  /**
   * Load a new promotion, named promoLabel and having nb students
   * The method publish a new promotion with no selected students.
   * @param promoLabel the name of the promotion
   * @param nb the number of students in the promotion
   */
  load(promoLabel: string, nb: number): this {
    const P: Promotion = {label: promoLabel, students: []};
    const students: Student[] = [
        {name: 'ABEL', id: 'E-1', note: 18},
        {name: 'ACHILLE', id: 'E-2', note: 20},
        {name: 'ADRIEN', id: 'E-3', note: 9},
        {name: 'ALAIN', id: 'E-4', note: 18},
        {name: 'ALAN', id: 'E-5', note: 8},
        {name: 'ALEXANDRE', id: 'E-6', note: 2},
        {name: 'ALEXIS', id: 'E-7', note: 9},
        {name: 'ALIX', id: 'E-8', note: 14},
        {name: 'ANATOLE', id: 'E-9', note: 17},
        {name: 'ANTHONY', id: 'E-10', note: 3},
        {name: 'ANTOINE', id: 'E-11', note: 12},
        {name: 'ANTONIN', id: 'E-12', note: 7},
        {name: 'ARMAND', id: 'E-13', note: 7},
        {name: 'ARMEL', id: 'E-14', note: 10},
        {name: 'ARNAUD', id: 'E-15', note: 2},
        {name: 'ARSÈNE', id: 'E-16', note: 13},
        {name: 'ARTHUR', id: 'E-17', note: 7},
        {name: 'AUBIN', id: 'E-18', note: 12},
        {name: 'AUGUSTIN', id: 'E-19', note: 6},
        {name: 'AURÉLIEN', id: 'E-20', note: 10},
        {name: 'AXEL', id: 'E-21', note: 0},
        {name: 'AYDEN', id: 'E-22', note: 12},
        {name: 'BAPTISTE', id: 'E-23', note: 2},
        {name: 'BENJAMIN', id: 'E-24', note: 15},
        {name: 'BRUNO', id: 'E-25', note: 5},
        {name: 'CAMILLE', id: 'E-26', note: 14},
        {name: 'CÉDRIC', id: 'E-27', note: 4},
        {name: 'CHARLES', id: 'E-28', note: 17},
        {name: 'CHARLIE', id: 'E-29', note: 6},
        {name: 'CHRISTOPHE', id: 'E-30', note: 8},
        {name: 'CLÉMENT', id: 'E-31', note: 4},
        {name: 'CÔME', id: 'E-32', note: 7},
        {name: 'DAVID', id: 'E-33', note: 15},
        {name: 'EDOUARD', id: 'E-34', note: 14},
        {name: 'ELIOTT', id: 'E-35', note: 2},
        {name: 'ÉLOI', id: 'E-36', note: 15},
        {name: 'ENZO', id: 'E-37', note: 16},
        {name: 'ESTÉBAN', id: 'E-38', note: 12},
        {name: 'ETHAN', id: 'E-39', note: 11},
        {name: 'ÉVAN', id: 'E-40', note: 4},
        {name: 'EWEN', id: 'E-41', note: 3},
        {name: 'FABIEN', id: 'E-42', note: 20},
        {name: 'FRANÇOIS', id: 'E-43', note: 19},
        {name: 'GABIN', id: 'E-44', note: 7},
        {name: 'GABRIEL', id: 'E-45', note: 13},
        {name: 'GASPARD', id: 'E-46', note: 16},
        {name: 'GERMAIN', id: 'E-47', note: 16},
        {name: 'GUILLAUME', id: 'E-48', note: 8},
        {name: 'HENRI', id: 'E-49', note: 15},
        {name: 'HERVÉ', id: 'E-50', note: 3},
        {name: 'HUGO', id: 'E-51', note: 4},
        {name: 'HUGUES', id: 'E-52', note: 4},
        {name: 'ISAAC', id: 'E-53', note: 4},
        {name: 'JORDAN', id: 'E-54', note: 19},
        {name: 'JOSEPH', id: 'E-55', note: 4},
        {name: 'JULES', id: 'E-56', note: 19},
        {name: 'JULIEN', id: 'E-57', note: 15},
        {name: 'LAURENT', id: 'E-58', note: 18},
        {name: 'LÉO', id: 'E-59', note: 7},
        {name: 'LÉON', id: 'E-60', note: 5},
        {name: 'LIAM', id: 'E-61', note: 4},
        {name: 'LOAN', id: 'E-62', note: 17},
        {name: 'LOUIS', id: 'E-63', note: 15},
        {name: 'LUCAS', id: 'E-64', note: 17},
        {name: 'LUCIEN', id: 'E-65', note: 9},
        {name: 'MAËL', id: 'E-66', note: 10},
        {name: 'MAHÉ', id: 'E-67', note: 3},
        {name: 'MALO', id: 'E-68', note: 10},
        {name: 'MARCEAU', id: 'E-69', note: 17},
        {name: 'MARCEL', id: 'E-70', note: 20},
        {name: 'MARIN', id: 'E-71', note: 2},
        {name: 'MARIUS', id: 'E-72', note: 4},
        {name: 'MARTIN', id: 'E-73', note: 15},
        {name: 'MATHÉO', id: 'E-74', note: 6},
        {name: 'MATHIAS', id: 'E-75', note: 0},
        {name: 'MATHIS', id: 'E-76', note: 6},
        {name: 'MATTEO', id: 'E-77', note: 3},
        {name: 'MATTHIEU', id: 'E-78', note: 20},
        {name: 'MAXENCE', id: 'E-79', note: 6},
        {name: 'MAXIME', id: 'E-80', note: 20},
        {name: 'MICHEL', id: 'E-81', note: 7},
        {name: 'MILAN', id: 'E-82', note: 2},
        {name: 'NATHAN', id: 'E-83', note: 18},
        {name: 'NICOLAS', id: 'E-84', note: 9},
        {name: 'NOA', id: 'E-85', note: 17},
        {name: 'NOAH', id: 'E-86', note: 4},
        {name: 'NOAM', id: 'E-87', note: 15},
        {name: 'NOÉ', id: 'E-88', note: 18},
        {name: 'NOLAN', id: 'E-89', note: 2},
        {name: 'OCTAVE', id: 'E-90', note: 17},
        {name: 'OSCAR', id: 'E-91', note: 11},
        {name: 'PASCAL', id: 'E-92', note: 15},
        {name: 'PAUL', id: 'E-93', note: 19},
        {name: 'PHILIPPE', id: 'E-94', note: 12},
        {name: 'PIERRE', id: 'E-95', note: 4},
        {name: 'QUENTIN', id: 'E-96', note: 20},
        {name: 'RAPHAËL', id: 'E-97', note: 16},
        {name: 'RAYMOND', id: 'E-98', note: 12},
        {name: 'RENAUD', id: 'E-99', note: 12},
        {name: 'ROBIN', id: 'E-100', note: 8}
      ];
    nb = Math.min(students.length, nb);
    for (let i = 0; i < nb; i++) {
      const pos = Math.floor( (1 + students.length) * Math.random());
      P.students.push( ...students.splice(pos, 1) );
    }
    this.promoDescrSubj.next([P, []]);
    return this;
  }

  /**
   * Select a student if it isn't, unselect it otherweise
   * @param etu the reference of the student to be selected or unselected
   */
  toggleSelect(etu: Student): void {
    const [P, L] = this.promoDescrSubj.value;
    const pos = this.promoDescrSubj.value[1].indexOf(etu);
    if (pos >= 0) {
      this.promoDescrSubj.next([P, L.filter( (s, i) => i !== pos ) ]);
    } else {
      this.promoDescrSubj.next([P, [...L, etu] ]);
    }
  }

  /**
   * true iif etu is part of selected students.
   * @param etu the reference of the student for which we want to know if she is selected
   */
  isSelected(etu: Readonly<Student>): boolean {
    return this.promoDescrSubj.value[1].indexOf(etu) >= 0;
  }

  /**
   * Publish a new promotion with student etu having a new note
   * @param etu The reference of the student
   * @param note The new note of the student
   */
  setNote(etu: Readonly<Student>, note: number): void {
    const [P, L] = this.promoDescrSubj.value;
    const newEtu = {...etu, note: Math.min(20, Math.max(note, 0))};
    const mapEtu = (e => e === etu ? newEtu : e);
    this.promoDescrSubj.next([
      {...P, students: P.students.map(mapEtu) },
      L.map(mapEtu)
    ]);
  }

  /**
   * A computed attribute that join the selected student's names with a comma
   */
  get selectedStudentsNames(): string {
    return this.promoDescrSubj.value[1].map(e => e.name).join(', ');
  }

}
