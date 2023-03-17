function dependingQuery (nber) {
    console.log(nber);
    switch(nber) {
        case 1:
            return "T'es nul";
        case 2:
            return "T'es ok";
        case 3:
            return "T'es bon";
        case 4:
            return "T'es tro";
        case 5:
            return "T'es tro fort";
        case 6:
            return "T'es ki";
        case 7:
            return "T'es pas mal";
        case 8:
            return "T'es trop bon";
        case 9:
            return "T'es une machine";
        case 10:
            return "LVL G.OD";
        default:
            return "aucune question enregistrée";
    }
}

// answers c'est le tableau des bonnes réponses aux 10 questions
// a => reponse1
// b => reponse2
// c => reponse3
// d => reponse4

const goodAnswers = ['a', 'b', 'c', 'd', 'b', 'b', 'c', 'b', 'c', 'd' ];
let answersUser = [];
const form = document.querySelector('.questions');
const writtenAnswer = document.querySelector('h4');

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