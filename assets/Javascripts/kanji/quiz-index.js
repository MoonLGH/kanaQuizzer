function init() {
    let kanji = localStorage.getItem("kanjiGrade")
    let phaseLanji = localStorage.getItem("phaseLanji")
    let numberKanji = localStorage.getItem("numberKanji")
    let kanjiLearned = localStorage.getItem("kanjiLearned")
    let kanjiData = localStorage.getItem("kanjiData")
    let Grade1 = localStorage.getItem("G1Counter")
    let Grade2 = localStorage.getItem("G2Counter")
    let Grade3 = localStorage.getItem("G3Counter")
    let Grade4 = localStorage.getItem("G4Counter")
    let Grade5 = localStorage.getItem("G5Counter")
    let Grade6 = localStorage.getItem("G6Counter")
    let Grade7 = localStorage.getItem("G7Counter")
    let Grade8 = localStorage.getItem("G8Counter")
    let Grade9 = localStorage.getItem("G9Counter")
    let Grade10 = localStorage.getItem("G10Counter")
    let OverAll = localStorage.getItem("OverAllCounter")

    if(!kanji){
        localStorage.setItem("kanjiGrade", "[]")
    }
    if (!phaseLanji) {
        localStorage.setItem("phaseLanji", "Generating Random Letter")
    }
    if (!numberKanji) {
        localStorage.setItem("numberKanji", "10")
    }
    if (!kanjiLearned) {
        localStorage.setItem("kanjiLearned", "[]")
    }
    if (!kanjiData) {
        localStorage.setItem("kanjiData", "[]")
    }
    if (!Grade1) {
        localStorage.setItem("G1Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade2) {
        localStorage.setItem("G2Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade3) {
        localStorage.setItem("G3Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade4) {
        localStorage.setItem("G4Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade5) {
        localStorage.setItem("G5Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade6) {
        localStorage.setItem("G6Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade7) {
        localStorage.setItem("G7Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade8) {
        localStorage.setItem("G8Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade9) {
        localStorage.setItem("G9Counter", '{"correct":0,"wrong":0}')
    }
    if (!Grade10) {
        localStorage.setItem("G10Counter", '{"correct":0,"wrong":0}')
    }
    if (!OverAll) {
        localStorage.setItem("OverAllCounter", '{"correct":0,"wrong":0}')
    }
    updateInfo(true)
    generateQuestion()
}
init()

function updateInfo(init){
    let kanjiList = JSON.parse(localStorage.getItem("kanjiGrade"))
    document.querySelector("#kanjiI > .kanjiList").innerText = kanjiList.join("&")

    document.querySelectorAll("#scoreL > div:not(.All)").forEach(ele => {
        let grade = ele.id
        let counter = JSON.parse(localStorage.getItem(`${grade}Counter`))
        ele.innerText = `${grade} - Correct : ${counter.correct} Wrong :${counter.wrong}`
    })
    
    let allEle = document.querySelector("#scoreL > .All")
    let AllCount = JSON.parse(localStorage.getItem("OverAllCounter"))
    allEle.querySelector("#correct").innerText = `Correct : ${AllCount.correct}`
    allEle.querySelector("#wrong").innerText = `Wrong : ${AllCount.wrong}`

    if(init){
        updatePhase(true)
    }else{
        updatePhase()
    }
    let phaseLanji = localStorage.getItem("phaseLanji")
    let nextPhase = localStorage.getItem("numberKanji")
    document.querySelector("#stageI > .phase").innerText = `Phase : ${phaseLanji}`
    document.querySelector("#stageI > .nextPhase").innerText = `NextPhase in : ${nextPhase}`
}

function updatePhase(initial){
    let phaseLanji = localStorage.getItem("phaseLanji")
    let numberKanji = localStorage.getItem("numberKanji")

    if(initial){
        return
    }
    if(phaseLanji === "Generating Random Letter"){
        if(numberKanji === "0"){
            localStorage.setItem("phaseLanji", "Relearn letter")
            localStorage.setItem("number", "10")
        }
    }

    if(phaseLanji === "Relearn letter"){
        if(numberKanji === "0"){
            localStorage.setItem("phaseLanji", "Generating Random Letter")
            localStorage.setItem("numberKanji", "10")
        }
    }

    if(numberKanji - 1 < 0){
        localStorage.setItem("numberKanji", "10")
    }
    else{
        localStorage.setItem("numberKanji", numberKanji - 1)
    }
}

document.querySelectorAll("#toggle > button").forEach((ele) =>{
    ele.addEventListener("click",()=>{
        toggle(ele.getAttribute("target"))
    })
})

function toggle(ele){
    console.log(ele)
    const element = document.querySelector(ele)
    let { display } = element.style
    if(display !== "none"){
        element.style.display = "none"
    }else{
        element.style.display = "block"
    }
}
