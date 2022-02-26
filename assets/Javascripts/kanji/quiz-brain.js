function generateQuestion(){
    let kanji = generateLetter()

    let phaseLanji = localStorage.getItem("phaseLanji")
    if(phaseLanji === "Generating Random Letter"){
        if(!kanji){
            return putQuestion("No kanji found")
        }
        putQuestion(kanji.literal)
    }
    if(phaseLanji === "Relearn letter"){
        let words = JSON.parse(localStorage.getItem("kanjiData"))
        words.sort((a,b) => a.counter-b.counter)
        if(!words.every((val, i, arr) => val.counter === arr[0].counter)){
            return putQuestion(words[0].kanji)
        }else{
            makeAlert("Seems like you understand these word, Randomizing","alert-success")
            setPhase("Generating Random Letter","10")
            if(!kanji){
                return putQuestion("No kanji found")
            }
            putQuestion(kanji.literal)
        }
    }
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

function setPhase(phase,counter){
    localStorage.setItem("phaseKanji", phase)
    localStorage.setItem("numberKanji", counter)
}

function generateLetter(){
    let kanjiGrade = JSON.parse(localStorage.getItem("kanjiGrade"))
    if(kanjiGrade.includes("All")){
        return Kanji.dump()[Math.floor(Math.random() * Kanji.dump().length)]
    }
    let grades = kanjiGrade.map(grade => Number(grade.replace("G","")))

    if(grades.length == 0){
        return null
    }
    let kanjis = []
    for(let grade of grades){
        kanjis = Kanji.dump().filter(kanji => kanji.grade == grade)
    }

    return kanjis[Math.floor(Math.random() * kanjis.length)]
}

function putQuestion(text){
    let question = document.getElementById("question")
    question.innerText = text
}