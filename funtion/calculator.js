//on submitting a form
//goal1:get the two input values
//goal2:add the two input values
//goal3:display the output

function addoption(a,b){
    let a= parseInt(document.getElementById(num1).value);
    let b= parseInt(document.getElementById(num2).value);
    document.getElementById("result").value=a+b;
}
// addoption(a,b);

function suboption(a,b){
    let a= parseInt(document.getElementById(num1).value);
    let b= parseInt(document.getElementById(num2).value);
    document.getElementById("result").value=a-b;
}
// suboption(a,b);

function muloption(a,b){
    let a= parseInt(document.getElementById(num1).value);
    let b= parseInt(document.getElementById(num2).value);
    document.getElementById("result").value=a*b;
}
// muloption(a,b);

function divoption(a,b){
    let a= parseInt(document.getElementById(num1).value);
    let b= parseInt(document.getElementById(num2).value);
    document.getElementById("result").value=a/b;
}
// divoption(a,b);

