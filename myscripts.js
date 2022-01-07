
//Function for question 1
function leftButton(){
    document.getElementById('buttonArgument').innerText="I'm right"
}
//Function for question 1
function rightButton(){
    document.getElementById('buttonArgument').innerText="No, I'm right!"
}


//Function for question 2
function hoverAlert(){
    alert("Hey, I told you not to hover over me!")
}

//Function for question 4
const form=document.getElementById("form")
const password=document.getElementById("exampleInputPassword1")
const rightPassword=12345678
let user=document.getElementById("exampleInputEmail1")
const header=document.getElementById("submitHeader").innerText
form.addEventListener('submit',(event) => {

    
    if(password.value==rightPassword){
        document.querySelector("#submitHeader").innerText="Hello, welcome!"
    }
    else{
        alert("SIKE! THATS THE WRONG NUMBA!")
    }
    event.preventDefault()
})
