
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

//Fu
const form=document.getElementById("form")
const password=document.getElementById("exampleInputPassword1")
const rightPassword=12345678
let user=document.getElementById("exampleInputEmail1")
function correctPassword(){
    if(password.value.match(password)){
        alert("no")
    }
    else{
        alert('yes')
    }
}



form.addEventListener('submit',(event) => {
    console.log(password.value)
    if(password.value==rightPassword){
        document.getElementById("submitHeader").innerText="Hello, welcome!";
    }
    else{
        alert("SIKE! THATS THE WRONG NUMBA!")
    }
})

/*form.addEventListener('submit',(e)=>{
    console.log(password)
    console.log(password.value)
    if(password.value.match(password)){
        alert("no")
    }
    else{
        alert('yes')
    }
})*/