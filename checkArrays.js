

var num = [11, 82, 3, 77,23,1,3,4,12];

document.getElementById("Display").innerHTML = num.toString();

function OnlickPush() {
	
  num.push(document.getElementById("InputValue").value);
  document.getElementById("Display").innerHTML = num;
}

function OnclickPop() {
  num.pop();
  document.getElementById("Display").innerHTML = num;
}

function Onclickshift() {
  num.shift();
  document.getElementById("Display").innerHTML = num;
}

function OnclickUnshift(){
    num.unshift(document.getElementById("InputValue").value);
    document.getElementById("Display").innerHTML = num ;
}

function OnclickMerge(){

 
  var input = document.getElementById("InputValue").value;
  var array=[input];
  num.concat(array);
  document.getElementById("Display").innerHTML=num +","+ array;

}
// function myFunctionSlice(){
//   var input = document.getElementById('name').value;
//   var array =[input];
//   var slice= num.slice(array[0]);
//   document.getElementById("demo").innerHTML = slice;
// }


function ClearFields() {

document.getElementById("InputValue").value = "";

}