function init() {
    let hiScore = localStorage.getItem("hiScore")
    let WrongTR = localStorage.getItem("WrongTR")
    let CorrectTR = localStorage.getItem("CorrectTR")

    if (!hiScore) {
        localStorage.setItem("hiScore", '{name:"",timer:""}')
    }
    if (!WrongTR) {
        localStorage.setItem("WrongTR", '0')
    }
    if (!CorrectTR) {
        localStorage.setItem("CorrectTR", '0')
    }
}

function toggle(ele) {
    console.log(ele)
    const element = document.querySelector(ele)
    let {
        display
    } = element.style
    if (display !== "none") {
        element.style.display = "none"
    } else {
        element.style.display = "block"
    }
}
document.querySelectorAll("#toggle > button").forEach((ele) => {
    ele.addEventListener("click", () => {
        toggle(ele.getAttribute("target"))
    })
})

// fetch words.json and assign the result to the variable words
let words, question, infotext, n5vocab,selectlist
fetch("words.json").then((response) => {
    return response.json()
}).then((data) => {
    words = data
})

fetch("vocab-n5.json").then((response) => {
    return response.json()
}).then((data) => {
    n5vocab = data
})

document.querySelector("#ammount").addEventListener("change", (e) => {
    ammount = e.target.value

    if (ammount > 3000) {
        e.target.value = 3000
        ammount = 3000
    }
    selectlist = []
    document.querySelectorAll("#Selects input").forEach((ele) => {
        if (ele.checked) {
            selectlist.push(ele.id)
        }else{
            selectlist.filter(ele => ele !== ele.id)
        }
    })

    if (selectlist.length === 0) return

    generateQuestion(Number(ammount), selectlist)
})

function generateWords(ammount, words) {
    let wordlist = []
    for (let i = 0; i < ammount; i++) {
        let random = words[Math.floor(Math.random() * words.length)]
        wordlist.push(random.Kanji || random.Kana || random.kana)
    }
    return wordlist
}

function generateQuestion(ammount, selects) {
    genwords = []
    if (selects.includes("Kana")) {
        genwords.push(...words)
    }
    if (selects.includes("N5")) {
        for (let word in n5vocab) {
            genwords.push(...n5vocab[word])
        }
    }
    question = generateWords(ammount, genwords)
    console.log(question)
    localStorage.setItem("WrongTR", '0')
    localStorage.setItem("CorrectTR", '0')
    infotext = ""
    document.querySelector("#question").innerText = question.join(" ")
}

// add enter listener
let answerbox = document.querySelector("#answer > input")
answerbox.addEventListener('keypress', function (e) {
    if (e.code === 'Space') {
        e.preventDefault()
        console.log("spacess")
        answer(answerbox.value)
        answerbox.value = ""
    } else if (e.key === 'Enter') {
        e.preventDefault()
        answer(answerbox.value)
        answerbox.value = ""
    }
})

function answer(text) {
    if (!question || question.length === 0) {
        return makeAlert("No question loaded", "alert-danger")
    }
    let WrongTR = localStorage.getItem("WrongTR")
    let CorrectTR = localStorage.getItem("CorrectTR")
    let iscorrect = (text.toLowerCase() === wanakana.toRomaji(question[0]).toLowerCase() || wanakana.toKana(text) === question[0])
    let kanji = false
    if(selectlist.includes("N5")){
        for (let word in n5vocab) {
            isKanjiExist = n5vocab[word].find(ele => ele.Kanji === question[0])
            if(isKanjiExist){
                kanji = {kanji:isKanjiExist.Kanji,kana:isKanjiExist.Kana}
                console.log("it is kanji")
                if (wanakana.toRomaji(isKanjiExist.Kana).toLowerCase() === wanakana.toRomaji(text).toLowerCase() || wanakana.toKana(text) === isKanjiExist.Kana) {
                    iscorrect = true
                }
            }
        }
    }
    if (iscorrect) {
        CorrectTR = Number(CorrectTR) + 1
        localStorage.setItem("CorrectTR", CorrectTR)
        infotext += `<div style="color:green; display:inline;">${question[0]} </div>`
        question.shift()
        makeAlert("Correct", "alert-success")
    } else {
        WrongTR = Number(WrongTR) + 1
        localStorage.setItem("WrongTR", WrongTR)
        infotext += `<div style="color:red; display:inline;">${question[0]} </div>`
        if(kanji !== false){

        }
        makeAlert(`Wrong, correct answer ${kanji !== false ? `${kanji.kana} - ${wanakana.toRomaji(kanji.kana)}` : wanakana.toRomaji(question[0])}`, "alert-danger")
        question.shift()
    }
    console.log(infotext)
    document.querySelector("#question").innerHTML = `${infotext} ${question.join(" ")}`

}

let alert = document.querySelector("#alerts")

function makeAlert(text, mode) {
    let newalert = document.createElement("div")
    newalert.classList.add("alert")
    newalert.classList.add(mode)
    newalert.innerText = text
    alert.appendChild(newalert)
    setTimeout(() => {
        removeAlert(newalert)
    }, 3000)
}

function removeAlert(alertbox) {
    alert.removeChild(alertbox)
}