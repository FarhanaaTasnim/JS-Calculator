function clearDisplay(){
    let display=document.getElementById('display');
    display.value="";
}
function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (value === '%') {
        display.value += '/100';
    } else {
        display.value += value;
    }

    console.log(value);
}

function deleteLast(){
    let display=document.getElementById('display');
    display.value=display.value.slice(0,-1);

}
function calculateResult(){
   try{
     let result=eval(document.getElementById("display").value);
    console.log(result);
document.getElementById("display").value=result;
 }
catch(error){
   console.log("Error evaluating expression:", document.getElementById("display").value);
    alert("Invalid expression");
}
  
}