const inputAnswer = document.querySelector("#answer > input")
const buttonAnswer = document.querySelector("#answer button")
const QuestionBox = document.querySelector("#question")

buttonAnswer.addEventListener("click",(e)=>{
    e.preventDefault()
    answer()
    inputAnswer.value = ""
})

inputAnswer.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        if(document.querySelector("#popup > .popup")){
            removePopUp()
            return 
        }
        answer()
        inputAnswer.value = ""
      }
})

function answer(){
    let kanjiLearned = JSON.parse(localStorage.getItem("kanjiLearned"))
    let kanjiData = JSON.parse(localStorage.getItem("kanjiData"))

    let Question = QuestionBox.innerText
    let Answer = inputAnswer.value
    if(Answer <= 0) return alert("Please enter an answer")

    let QDetail = Kanji.getDetails(Question)

    if(!kanjiLearned.includes(Question)){
        kanjiLearned.push(Question)
        localStorage.setItem("kanjiLearned",JSON.stringify(kanjiLearned))
    }


    let answers = [...QDetail.kunyomi,...QDetail.onyomi]
    let isCorrect = answers.find(kan => wanakana.toRomaji(kan).toLowerCase() === wanakana.toRomaji(Answer).toLowerCase() || wanakana.toHiragana(Answer) === wanakana.toHiragana(kan))
    if(isCorrect){
        generatePopup("popup",{title:"Correct",text:`Kanji : ${QDetail.literal}<br>Onyomi: ${QDetail.onyomi}<br>Kunyomi: ${QDetail.kunyomi}<br>Meaning: ${QDetail.meanings}`,color:"#9AF000"})
    }else{
        generatePopup("popup",{title:"Wrong!",text:`Kanji : ${QDetail.literal}<br>Onyomi: ${QDetail.onyomi}<br>Kunyomi: ${QDetail.kunyomi}<br>Meaning: ${QDetail.meanings}`,color:"#EA0034"})
    }
    updateData(Question,QDetail,kanjiData,isCorrect ? true : false)
    updateInfo()
    generateQuestion()
}

function updateData(kanji,detail,kanjiData,info){
    let grade = detail.grade
    let onData = kanjiData.find(data=>data.kanji === kanji)
    let allC = JSON.parse(localStorage.getItem("OverAllCounter"))
    let gradeData = JSON.parse(localStorage.getItem(`${detail.jlpt === 4 ? "N5" : `G${grade}`}Counter`))

    if(!onData){
        onData = {
            kanji: kanji,
            counter:0
        }
        kanjiData.push(onData)
    }
    if(info === true){
        allC.correct++
        if(gradeData){
            gradeData.correct++
        }
        onData.counter++
    }else{
        allC.wrong++
        if(gradeData){
            gradeData.wrong++
        }
        onData.counter--
    }
    
    localStorage.setItem("OverAllCounter",JSON.stringify(allC))
    
    localStorage.setItem(`${detail.jlpt === 4 ? "N5" : `G${grade}`}Counter`,JSON.stringify(gradeData))
    localStorage.setItem("kanjiData",JSON.stringify(kanjiData))
}
