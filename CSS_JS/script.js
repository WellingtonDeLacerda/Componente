let l1 = window.document.querySelector('#l1') 
let l2 = window.document.querySelector('#l2') 
let l3 = window.document.querySelector('#l3') 
let l4 = window.document.querySelector('#l4') 
let l5 = window.document.querySelector('#l5') 

let clas = window.document.querySelector('.clas') 

function clicar() {
    let submit = window.document.querySelector('.submit')  

    let sec1 = window.document.querySelector('.sec1')
    let sec2 = window.document.querySelector('.sec2')
     
    if(sec1.style.display === 'block' || sec1.style.display === ''){
        
        sec1.style.display = 'none'
        sec2.style.display = 'block'
       } 
       
}
function link1() {
    clas.innerHTML = 1
    l1.style.backgroundColor = 'white'
    l2.style.backgroundColor = ''
    l3.style.backgroundColor = ''
    l4.style.backgroundColor = ''
    l5.style.backgroundColor = ''
}
function link2() {
    clas.innerHTML = 2
    l1.style.backgroundColor = ''
    l2.style.backgroundColor = 'white'
    l3.style.backgroundColor = ''
    l4.style.backgroundColor = ''
    l5.style.backgroundColor = ''
}

function link3() {
    clas.innerHTML = 3
    l1.style.backgroundColor = ''
    l2.style.backgroundColor = ''
    l3.style.backgroundColor = 'white'
    l4.style.backgroundColor = ''
    l5.style.backgroundColor = ''
}
function link4() {
    clas.innerHTML = 4
    l1.style.backgroundColor = ''
    l2.style.backgroundColor = ''
    l3.style.backgroundColor = ''
    l4.style.backgroundColor = 'white'
    l5.style.backgroundColor = ''
}
function link5() {
    clas.innerHTML = 5
    l1.style.backgroundColor = ''
    l2.style.backgroundColor = ''
    l3.style.backgroundColor = ''
    l4.style.backgroundColor = ''
    l5.style.backgroundColor = 'white'
}