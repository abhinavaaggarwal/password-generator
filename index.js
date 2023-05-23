const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("pswdOne")
let passwordTwo = document.querySelector("#pswdTwo")
let slider = document.getElementById("pass-length-slider")
let pswd1 = ""
let pswd2 = ""
let displayLength = document.querySelector("#selected-len span")

displayLength.textContent = slider.value
function displayLen() {
    displayLength.textContent = slider.value 
}

function generate() {
    if(pswd1.length === 0 && pswd2.length === 0){
        render()
    }
    else {
        pswd1 = ""
        pswd2 = ""
        render()
    }
}

function render() {
    for(let i=0;i<slider.value;i++) {
        let idx1 = Math.floor(Math.random() * characters.length)
        let char1 = characters[idx1]
        pswd1 += char1
        let idx2 = Math.floor(Math.random() * characters.length)
        let char2 = characters[idx2]
        pswd2 += char2
    }
    passwordOne.textContent = pswd1
    passwordTwo.textContent = pswd2
}


