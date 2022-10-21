document.querySelectorAll("#grade input").forEach((ele) => {
    let kanjiList = JSON.parse(localStorage.getItem("kanjiGrade"))

    if (kanjiList.includes(ele.value)) {
        ele.checked = true
    }
    ele.addEventListener("change", function () {
        let kanjiList = JSON.parse(localStorage.getItem("kanjiGrade"))
        let kanji = ele.value

        if (ele.checked) {
            kanjiList.push(kanji)
        } else {
            kanjiList = kanjiList.filter(k => k !== kanji)
        }
        localStorage.setItem("kanjiGrade", JSON.stringify(kanjiList))
        updateInfo(true)
        generateQuestion()
    });
})

document.querySelector("#clearAll").addEventListener("click", function () {
    resetAll()
})

function resetAll() {
    localStorage.setItem("kanjiGrade", "[]")
    localStorage.setItem("phaseLanji", "Generating Random Letter")
    localStorage.setItem("numberKanji", "10")
    localStorage.setItem("kanjiLearned", "[]")
    localStorage.setItem("kanjiData", "[]")
    localStorage.setItem("G1Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G2Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G3Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G4Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G5Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G6Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G7Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G8Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G9Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("G10Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("N5Counter", '{"correct":0,"wrong":0}')
    localStorage.setItem("OverAllCounter", '{"correct":0,"wrong":0}')

    document.location.reload()
}