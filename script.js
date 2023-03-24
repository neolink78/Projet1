function dependingQuery (nber) {
    console.log(nber);
    switch(nber) {
        case 1:
            return "T'as compris le but d'un quiz ? Une seule bonne réponse !";
        case 2:
            return "Va falloir faire un test de QI, 2 bonnes réponses !";
        case 3:
            return "Peut mieux faire, 3 bonnes réponses !";
        case 4:
            return "C'est pas ouf, 4 bonnes réponses !";
        case 5:
            return "Passable, 5 bonnes réponses ..";
        case 6:
            return "Qui l'aurait cru ? 6 bonnes réponses !";
        case 7:
            return "On y arrive ! 7 bonnes réponses !";
        case 8:
            return "T'es vraiment pas loin, 8 bonnes réponses !";
        case 9:
            return "T'es une machine, 9 bonnes réponses !";
        case 10:
            return "Sans fautes, GG ! 10 bonnes réponses !";
        default:
            return "T'as répondu à rien..";
    }
}

// answers c'est le tableau des bonnes réponses aux 10 questions
// a => reponse1
// b => reponse2
// c => reponse3
// d => reponse4

const goodAnswers = ['a', 'c', 'c', 'd', 'b', 'b', 'c', 'd', 'c', 'd' ];
let answersUser = [];
const form = document.querySelector('.questions');
const writtenAnswer = document.querySelector('h4');
const properColor = document.querySelectorAll('li');
// Cette fonction reçois les réponses du user que l'on compare avec le tableau des bonnes réponses.
function compare(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === goodAnswers[i]) {
            result++;
        }
    }
    
    return result;
}

form.addEventListener("submit", function (e) {

    e.preventDefault();
    for (let i = 1; i <= goodAnswers.length; i++) {
            
            answersUser.push(
                // ici, nous récupérons la valeur de l'input de i qui a été selectionné. 
                // Soit "a", "b", "c" ou "d"
                document.querySelector(`input[name=q${i}]:checked`).value
            )
        }
        // Nous avons l'ensemble des réponses de l'utilisateur
        // Nous devons le comparer avec le tableau des bonnes réponses.
        // console.log("nb bonne réponse:", compare(answersUser)); ✅
        writtenAnswer.innerHTML = dependingQuery(compare(answersUser));
        // permet de vider le tableau des réponses de l'utilisateur
        answersUser = [];
});
