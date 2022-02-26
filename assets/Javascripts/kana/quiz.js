const inputAnswer = document.querySelector("#answer > input")
const buttonAnswer = document.querySelector("#answer button")
const QuestionBox = document.querySelector("#question > h3")

buttonAnswer.addEventListener("click",(e)=>{
    e.preventDefault()
    answer()
    inputAnswer.value = ""
})

inputAnswer.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        answer()
        inputAnswer.value = ""
      }
})


function answer() {
    if(!wanakana.isJapanese(QuestionBox.innerText)) return makeAlert("Please Check one of the question","alert-danger")
    if(inputAnswer.value === "") return makeAlert("Please enter an answer","alert-danger")
    
    let answer = wanakana.toRomaji(QuestionBox.innerText).toLowerCase()

    // Check Answer
    if(answer === inputAnswer.value.toLowerCase() || wanakana.toKana(inputAnswer.value) === QuestionBox.innerText){
        correct(QuestionBox.innerText)
        makeAlert("Correct","alert-success")
    }else{
        wrong(QuestionBox.innerText)
        makeAlert(`Wrong, Correct Answer = ${answer}`,"alert-danger")
    }

    // Generate New Question
    let q = GenerateNewQuestion()
    if(q){
        putQuestion(q)
    }else{
        putQuestion("No Question")
    }
    return
}

let alert = document.querySelector("#alerts")
function makeAlert(text,mode){
    let newalert = document.createElement("div")
    newalert.classList.add("alert")
    newalert.classList.add(mode)
    newalert.innerText = text
    alert.appendChild(newalert)
    setTimeout(()=>{
        removeAlert(newalert)
    },3000)
}

function removeAlert(alertbox){
    alert.removeChild(alertbox)
}