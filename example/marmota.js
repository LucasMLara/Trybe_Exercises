// ./index.js
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
const numberToLetter = {
  1: 'A',
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
};
/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(({ name, grade }) => {
    const letterGrade = numberToLetter[(Math.round(grade * 10)) / 10] || 'F';
    return { name, grade, letterGrade };
  }) });
  
/* "Determinar" */
const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/* Exemplo de execução */
// ...

/*
  Não se esqueça que é necessário exportar ao final as
  funções para que você possa testa-las de forma unitária
*/
module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};

setApproved(students);