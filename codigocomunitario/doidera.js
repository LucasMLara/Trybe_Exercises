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
  { note: 0, letra: 'F' },
];

// formata ai lara !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const percentageGradesIntoLettersDoidera = ({ name, disciplines }, interfaceGrade = escolaTrybe) => ({
  name,
    disciplines: disciplines.map(({ name: dd, grade }) => {
      let letterGrade;

    const gradesInterface = interfaceGrade.sort((a, b) => b.note - a.note);
    for (let i = 0; i < gradesInterface.length; i += 1) {
      const { note, letra } = gradesInterface[i];
      if (grade >= note) { letterGrade = letra; break; }
    }
    return { name: dd, grade, letterGrade };
  }) });

const resultadodadoidera = percentageGradesIntoLettersDoidera(students[0]);
console.log(resultadodadoidera);