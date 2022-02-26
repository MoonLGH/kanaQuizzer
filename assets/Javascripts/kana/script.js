// onload gen q
window.onload = function(){
    let q = GenerateNewQuestion()
    if(q){
        putQuestion(q)
    }else{
        putQuestion("No Question")
    }
}
// Hiragana settings
document.querySelectorAll("#hira input").forEach((ele) => {
    if (!localStorage.getItem(ele.id)) {
        localStorage.setItem(ele.id, ele.checked);
    } else {
        ele.checked = JSON.parse(localStorage.getItem(ele.id))
    }
    ele.addEventListener("change", function () {
        localStorage.setItem(ele.id, ele.checked);
        let q = GenerateNewQuestion()
        if(q){
            putQuestion(q)
        }else{
            putQuestion("No Question")
        }
    });
})
// Katakana settings
document.querySelectorAll("#kata input").forEach((ele) => {
    if (!localStorage.getItem(ele.id)) {
        localStorage.setItem(ele.id, ele.checked);
    } else {
        ele.checked = JSON.parse(localStorage.getItem(ele.id))
    }
    ele.addEventListener("change", function () {
        localStorage.setItem(ele.id, ele.checked);
        let q = GenerateNewQuestion()
        if(q){
            putQuestion(q)
        }else{
            putQuestion("No Question")
        }
    });
})
console.log("yeet")

// more function
function checkQ() {
    let exist = false
    let obj = {kata:[],hira:[]}
    for(let kata of [...document.querySelectorAll("#kata input")]){
        if(kata.checked){
            exist = true
            obj["kata"].push(kata.id)
        }
    }
    for(let hira of [...document.querySelectorAll("#hira input")]){
        if(hira.checked){
            exist = true
            obj["hira"].push(hira.id)
        }
    }
    if(exist === false) return false
    return obj
}

function randomize(arr){
    const i = Math.floor(Math.random()*arr.length)
    return arr[i];
}

function GenerateNewQuestion() {
    let check = checkQ()
    let Question = []

    let phase = localStorage.getItem("phase")


    if(!check) return false
    for(let c in check){
        for(let item of check[c]){
            if(c === "kata") {
                Question.push(...kata[item])
            } else if(c === "hira") {
                Question.push(...hira[item])
            }
        }
    }
    if(phase === "Relearn letter"){
        let words = JSON.parse(localStorage.getItem("wordsData"))
        words.sort((a,b) => a.counter-b.counter)
        if(!words.every((val, i, arr) => val.counter === arr[0].counter)){
            return words[0].letter
        }else{
            makeAlert("Seems like you understand these word, Randomizing","alert-success")
            setPhase("Generating Random Letter","10")
            return randomize(Question) 
        }
    }
    return randomize(Question) 
}

function putQuestion(str){
    document.querySelector("#question > h3").innerHTML = str 
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

document.querySelector("#clearH").addEventListener("click",()=>{
    let hiraData = JSON.parse(localStorage.getItem("hiraganaCounter"))
    hiraData.correct = 0
    hiraData.wrong = 0
    
    for(let h in hiraData){
        hiraData[h] = 0
    }

    newData = JSON.parse(localStorage.getItem("wordsData"))

    for(let w of newData){
        if(allhira.includes(w.letter)){
            w.deleted = true
        }
    }

    localStorage.setItem("wordsData", JSON.stringify(newData.filter((ele)=> !ele.deleted)))
    localStorage.setItem("hiraganaCounter", JSON.stringify(hiraData))
    setPhase("Generating Random Letter","10")
    window.location.reload()
})

document.querySelector("#clearK").addEventListener("click",()=>{
    let kataData = JSON.parse(localStorage.getItem("katakanaCounter"))
    kataData.correct = 0
    kataData.wrong = 0
    
    for(let k in kataData){
        kataData[k] = 0
    }

    newData = JSON.parse(localStorage.getItem("wordsData"))

    for(let w of newData){
        if(allkata.includes(w.letter)){
            w.deleted = true
        }
    }

    localStorage.setItem("wordsData", JSON.stringify(newData.filter((ele)=> !ele.deleted)))
    localStorage.setItem("katakanaCounter", JSON.stringify(kataData))
    setPhase("Generating Random Letter","10")
    window.location.reload()
})