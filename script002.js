let listStudents = [{
    name: "Hugo",
    firstTestScore: 9.5,
    secondTestScore: 9.5   
  },
  {
    name: "Carlos",
    firstTestScore: 6,
    secondTestScore: 6    
  },
  {
    name: "Vanessa",
    firstTestScore: 8,
    secondTestScore: 8    
  },
  {
    name: "Rodrigo",
    firstTestScore: 5.5,
    secondTestScore: 5.5    
  }];

const passingScore = 7;

function calculatesAverageOfTwoGrades(scoreOne, scoreTwo){
    let average = ((scoreOne + scoreTwo) / 2);
    
    if((scoreOne + scoreTwo) % 2 == 0){
        return average;
    } else {
        return ((scoreOne + scoreTwo) / 2).toFixed(1);
    }
}

function showsStudentGradeAverages(listOfStudentsWithGrades) {

    for(let student of listOfStudentsWithGrades) {
        let average = calculatesAverageOfTwoGrades(student.firstTestScore, student.secondTestScore);

        if(average >= passingScore) {
            alert(`A média do(a) aluno(a) ${student.name} é: ${average} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
        } else {
            alert(`A média do(a) aluno(a) ${student.name} é: ${average} \n Não foi dessa vez, ${student.name}! Tente novamente!`);
        }
    }
}

showsStudentGradeAverages(listStudents);