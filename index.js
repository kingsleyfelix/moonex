const bars = document.querySelector(".fa-bars")
const linksEl = document.querySelectorAll(".mobile-links")

linksEl.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        bars.click()
    })
})

const ansel = document.querySelector(".ans")
const ans2el = document.querySelector(".ans2")
const ans3el = document.querySelector(".ans3")
const ic1 = document.querySelector(".fa-plus")
const ic2 = document.querySelector(".fa-angle-down")
const ic3 = document.getElementById("fa-plus")
const jsic2El = document.querySelector(".jsic2")
const jsic3El = document.querySelector(".jsic3")
const jsic1El = document.querySelector(".jsic1")

let plus = true
jsic1El.addEventListener("click", ()=>{
    if(plus === true){
        ansel.classList.remove("display")
        ic1.classList.remove("fa-plus")
        ic1.classList.add("fa-angle-down")
        console.log("good")
        plus = false
    }else if(plus === false){
        ansel.classList.add("display")
        ic1.classList.remove("fa-angle-down")
        ic1.classList.add("fa-plus")
        console.log("btn")
        plus = true
    }
})

let plus2 = false
jsic2El.addEventListener("click", ()=>{
    if(plus2 === true){
        ans2el.classList.remove("display")
        ic2.classList.remove("fa-plus")
        ic2.classList.add("fa-angle-down")
        console.log("good")
        plus2 = false
    }else if(plus2 === false){
        ans2el.classList.add("display")
        ic2.classList.remove("fa-angle-down")
        ic2.classList.add("fa-plus")
        console.log("btn")
        plus2 = true
    }
})

let plus3 = true
jsic3El.addEventListener("click", ()=>{
    if(plus3 === true){
        ans3el.classList.remove("display")
        ic3.classList.remove("fa-plus")
        ic3.classList.add("fa-angle-down")
        console.log("good")
        plus3 = false
    }else if(plus3 === false){
        ans3el.classList.add("display")
        ic3.classList.remove("fa-angle-down")
        ic3.classList.add("fa-plus")
        console.log("btn")
        plus3 = true
    }
})

