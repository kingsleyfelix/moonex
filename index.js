const ansel = document.querySelector(".ans")
const ans2el = document.querySelector(".ans2")
const ans3el = document.querySelector(".ans3")
const ic1 = document.querySelector(".ic1")
const ic2 = document.querySelector(".ic2")
const ic3 = document.querySelector(".ic3")
const icon2El = document.querySelectorAll("icon2")
const jsic2El = document.querySelector(".jsic2")
const jsic3El = document.querySelector(".jsic3")
const jsic1El = document.querySelector(".jsic1")
// const btn2 = document.querySelector(".fa-plus")

let display = true;

// if(display = true){
    
// }
jsic2El.addEventListener("click", ()=>{
    if(display === true){
        ansel.classList.add("display")
        ic2.classList.remove("fa-angle-down")
        ic2.classList.add("fa-plus")
        console.log("good")
        // console.log(ansel.classList[2] === "display")
        display = false
    }else if(display === false){
        ic2.classList.remove("fa-plus")
        ic2.classList.add("fa-angle-down")
        ansel.classList.remove("display")
        console.log("btn")
        display = true
    }
})

jsic1El.addEventListener("click", ()=>{
    if(display === true){
        ans2el.classList.add("display")
        ic1.classList.remove("fa-plus")
        ic1.classList.add("fa-angle-down")
        console.log("good")
        // console.log(ansel.classList[2] === "display")
        display = false
    }else if(display === false){
        ic1.classList.remove("fa-plus")
        ic1.classList.add("fa-angle-down")
        ans2el.classList.remove("display")
        console.log("btn")
        display = true
    }
})

jsic3El.addEventListener("click", ()=>{
    if(display === true){
        ans3el.classList.add("display")
        ic3.classList.remove("fa-plus")
        ic3.classList.add("fa-angle-down")
        console.log("good")
        // console.log(ansel.classList[2] === "display")
        display = false
    }else if(display === false){
        ic3.classList.remove("fa-plus")
        ic3.classList.add("fa-angle-down")
        ans3el.classList.remove("display")
        console.log("btn")
        display = true
    }
})
//    btn.classList.add(".display")
//    jsicEl.classList.remove("display")
//    btn.classList.add("fa-plus")

// if(ansel.classList[2] === "display"){
//     btn.addEventListener("click", ()=>{
        // ansel.classList.remove("display")
//         // btn.classList.remove("fa-plus")
//         // btn.classList.add("fa-angle-down")
//         console.log(btn.classList[1])
//     })
// }

