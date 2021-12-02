console.log("jeru");

function calculate() {
    event.preventDefault();//prevents from refreshing
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    let c=document.getElementById("sign").value;


    if(c=="+"){
        document.getElementById("result").value=a+b;

    };
    if(c=="-"){
        document.getElementById("result").value=a-b;
    };
    if(c=="*"){
        document.getElementById("result").value=a*b;
    };
    if(c=="/"){
        document.getElementById("result").value=a/b;
    }
   }