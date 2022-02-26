function initialcheck() {
    let phase = localStorage.getItem("phase")
    let number = localStorage.getItem("number")
    let wordsLearned = localStorage.getItem("wordsLearned")
    let wordsData = localStorage.getItem("wordsData")
    let hiraData = localStorage.getItem("hiraganaCounter")
    let kataData = localStorage.getItem("katakanaCounter")

    if (!phase) {
        localStorage.setItem("phase", "Generating Random Letter")
    }
    if (!number) {
        localStorage.setItem("number", "10")
    }
    if (!wordsLearned) {
        localStorage.setItem("wordsLearned", "[]")
    }
    if (!wordsData) {
        localStorage.setItem("wordsData", "[]")
    }
    if (!hiraData) {
        localStorage.setItem("hiraganaCounter", '{"correct":0,"wrong":0}')
    }
    if (!kataData) {
        localStorage.setItem("katakanaCounter", '{"correct":0,"wrong":0}')
    }
    updateInfo()
}
initialcheck()

function updateInfo(){
    let hiracount = JSON.parse(localStorage.getItem("hiraganaCounter"))
    document.querySelector("#hiraI > .correct").innerText = `Correct : ${hiracount.correct}`
    document.querySelector("#hiraI > .wrong").innerText = `Wrong : ${hiracount.wrong}`

    let katacount = JSON.parse(localStorage.getItem("katakanaCounter"))
    document.querySelector("#kataI > .correct").innerText = `Correct : ${katacount.correct}`
    document.querySelector("#kataI > .wrong").innerText = `Wrong : ${katacount.wrong}`


    updatePhase(true)
    let phase = localStorage.getItem("phase")
    let nextPhase = localStorage.getItem("number")
    document.querySelector("#stageI > .phase").innerText = `Phase : ${phase}`
    document.querySelector("#stageI > .nextPhase").innerText = `NextPhase in : ${nextPhase}`
}
function correct(Letter) {
    updateScore(Letter,"Correct")
    count(Letter, "Correct")
}

function wrong(Letter) {
    updateScore(Letter,"Wrong")
    count(Letter, "Wrong")
}

function count(Letter, type) {
    let parselearned = JSON.parse(localStorage.getItem("wordsLearned"))
    if (!parselearned.includes(Letter)) {
        parselearned.push(Letter)
        localStorage.setItem("wordsLearned", JSON.stringify(parselearned))
    }

    newData = JSON.parse(localStorage.getItem("wordsData"))
    let data = newData.find(item => item.letter === Letter)

    if (!data) {
        data = {
            letter: Letter,
            counter: 0
        }
        newData.push(data)
    }

    let counter = data.counter
    if (type === "Correct") {
        counter++
    } else if (type === "Wrong") {
        counter--
    }

    data.counter = counter
    localStorage.setItem("wordsData", JSON.stringify(newData))
}

function updateScore(Letter,type){
    let isHira = wanakana.isHiragana(Letter)
    let isKata = wanakana.isKatakana(Letter)

    if(isHira){
        let hiraData = JSON.parse(localStorage.getItem("hiraganaCounter"))
        if(type === "Correct"){
            hiraData.correct++
        }else if(type === "Wrong"){
            hiraData.wrong++
        }
        localStorage.setItem("hiraganaCounter", JSON.stringify(hiraData))
    }
    if(isKata){
        let kataData = JSON.parse(localStorage.getItem("katakanaCounter"))
        if(type === "Correct"){
            kataData.correct++
        }else if(type === "Wrong"){
            kataData.wrong++
        }
        localStorage.setItem("katakanaCounter", JSON.stringify(kataData))
    }
    updatePhase()
    updateInfo()
}

function updatePhase(initial){
    let phase = localStorage.getItem("phase")
    let number = localStorage.getItem("number")

    if(initial){
        return
    }
    if(phase === "Generating Random Letter"){
        if(number === "0"){
            localStorage.setItem("phase", "Relearn letter")
            localStorage.setItem("number", "10")
        }
    }

    if(phase === "Relearn letter"){
        if(number === "0"){
            localStorage.setItem("phase", "Generating Random Letter")
            localStorage.setItem("number", "10")
        }
    }

    if(number - 1 < 0){
        localStorage.setItem("number", "10")
    }
    else{
        localStorage.setItem("number", number - 1)
    }
}

function setPhase(phase,counter){
    localStorage.setItem("phase", phase)
    localStorage.setItem("number", counter)
    updateInfo()
}