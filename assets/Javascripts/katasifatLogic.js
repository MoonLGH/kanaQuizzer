function initialcheck() {
    let phase = localStorage.getItem("phase")
    let number = localStorage.getItem("number")
    let sifatLearned = localStorage.getItem("sifatLearned")
    let sifatData = localStorage.getItem("sifatData")
    let kataSifatData = localStorage.getItem("kataSifatData")
    let kataData = localStorage.getItem("katakanaCounter")

    if (!phase) {
        localStorage.setItem("phase", "Generating Random Letter")
    }
    if (!number) {
        localStorage.setItem("number", "50")
    }
    if (!sifatLearned) {
        localStorage.setItem("sifatLearned", "[]")
    }
    if (!sifatData) {
        localStorage.setItem("sifatData", "[]")
    }
    if (!kataData) {
        localStorage.setItem("katakanaCounter", '{"correct":0,"wrong":0}')
    }
    if (!kataSifatData) {
        localStorage.setItem("kataSifatCounter", '{"correct":0,"wrong":0}')
    }
    updateInfo()
}
initialcheck()

function updateInfo(){
    let katacount = JSON.parse(localStorage.getItem("kataSifatCounter"))
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
    let parselearned = JSON.parse(localStorage.getItem("sifatLearned"))
    if (!parselearned.includes(Letter)) {
        parselearned.push(Letter)
        localStorage.setItem("sifatLearned", JSON.stringify(parselearned))
    }

    newData = JSON.parse(localStorage.getItem("sifatData"))
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
    localStorage.setItem("sifatData", JSON.stringify(newData))
}

function updateScore(Letter,type){
        let hiraData = JSON.parse(localStorage.getItem("kataSifatCounter"))
        if(type === "Correct"){
            hiraData.correct++
        }else if(type === "Wrong"){
            hiraData.wrong++
        }
        localStorage.setItem("kataSifatCounter", JSON.stringify(hiraData))
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
            localStorage.setItem("number", "20")
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