let  home = 12
let guest = 5
let sumEl = document.getElementById("sum-el")
let addEl = document.getElementById("add-el")



function sum() {
    console.log("home + 1")
    sumEl.textContent = home + 1
    
    
}

sum()

function sum2() {
    console.log("home + 2")
    sumEl.textContent = home + 2
}

add()

function sum3() {
    console.log("home + 3")
    sumEl.textContent = home + 3
    }
    
    sum3()
    
    function add() {
        console.log("guest + 1")
        sumEl.textContent = guest + 1
    }
    
    add()
    
    function add2() {
        console.log("guest + 2")
        sumEl.textContent = guest + 2
    }
    
    add2()
    
    function add3() {
        console.log("guest + 3")
        sumEl.textContent = guest + 3
    }