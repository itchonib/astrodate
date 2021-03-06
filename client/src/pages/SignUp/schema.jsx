import { PartOne, PartThree, PartTwo } from './Parts';

export const emptyFormData = {};

export const schema = {
  one: {
    title: 'PartOne',
    form: PartOne,
    previous: null,
    next: 'second'
  },
  second: {
    title: 'PartTwo',
    form: PartTwo,
    previous: 'one',
    next: 'third'
  },
  third: {
    title: 'PartThree',
    form: PartThree,
    previous: 'second',
    next: null
  }
};
