let tasklists=[];


 //updates values in local storage
function submitHandler(){
    event.preventDefault();//prevents refreshing 
    //getting input
    let inputGot=document.getElementById("input").value;
    
    //pushing the values we get into the array
    tasklists.unshift(inputGot);
    
   
   let arrayToString=JSON.stringify(tasklists);


   //inside a setItem the parameters should be in string datatype
   localStorage.setItem("taskstored",arrayToString)//parameters(key,value)
   //tasklists array is an object
   //arrayToString is an string
   //inputGot is a string

   createlist();//this creates the list whenever we clicks the button
}


//creates list from getting values from local storage
function createlist(){

  const againToArray= localStorage.getItem("taskstored");

  const inString=JSON.parse(againToArray);//parse changes to object=array
  tasklists=inString;
 
//    let tasks="";  //i<fwsa.length
//    for(let i=0; i<inString.length; i++){   //for( let initial value,condition,step)
//        let newtask="<li>" +inString[i] +"</li>";   //array[0] array[1]
//        tasks=tasks+newtask;
 
//    }
 
//    let ulTag=document.getElementById("lists");//<ul></ul>
//    ulTag.innerHTML=tasks;
//  };
 



createlist();//this creates the list whenever the page is reloaded.
//nothing to do with user so it is not written in html




// datatypes:
// Object  ---> array
// string  --->input values