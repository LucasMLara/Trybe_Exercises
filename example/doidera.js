const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

const escolaTrybe = [
  { note: 0.9, letra: 'A' },
  { note: 0.8, letra: 'B' },
  { note: 0.7, letra: 'C' },
  { note: 0.6, letra: 'D' },
  { note: 0.5, letra: 'E' },
  { note: -1, letra: 'F' },
];

// formata ai lara !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const percentageGradesIntoLettersDoidera = ({ name, disciplines }) => ({
  name,
    disciplines: disciplines.map(({ name, grade }) => {
      let letterGrade;

    while (true) {
      const { note, letra } = escolaTrybe;
      if (grade >= note) {
        letterGrade = letra;
        break;
      }
    }
    return { name, grade, letterGrade };
  }) });

const resultadodadoidera = percentageGradesIntoLettersDoidera(students);
console.log(resultadodadoidera);