var Array = [];
function lengthh() {
  n = document.getElementById("1").value;
  var str = " You have entered length: " + n;
  document.getElementById("res").innerHTML = str;
}
function arrayip() {
  let arrval = document.getElementById("2").value;
  Array = arrval.split(",");
  if (Array.length != n) {
    alert("length of array is not same as above mentioned");
  } else {
    var str = " You have entered : " + Array;
    document.getElementById("res").innerHTML = str;
  }
}
function del() {
  let val = document.getElementById("delete").value;
  var f = Array.indexOf(val);
  if (f == -1) {
    var str = "Value : " + val + " is not present in Array ";
    document.getElementById("res").innerHTML = str;
  } else {
    delete Array[f];
    Array = Array.filter(function (elem) {
      return elem !== undefined;
    });
    var str = "Value : " + val + " is deleted";
    document.getElementById("res").innerHTML = str;
  }
}
function find() {
  var val = document.getElementById("fnd").value;
  var f = Array.indexOf(val);
  console.log(Array[0]);
  if (f == -1) {
    var str = "Value : " + val + " is not present in array";
    document.getElementById("res").innerHTML = str;
  } else {
    var str = "Value :" + val + " is present in array at " + (f + 1);
    document.getElementById("res").innerHTML = str;
  }
}
function Empty() {
  
  if(Array.length===0)
  {
    document.getElementById("res").innerHTML = " Array is Already Emptied";
  }
  else{
    Array = [];
    document.getElementById("res").innerHTML = " Array is Emptied ";  
  }
  
}
function Display() {
  if (Array.length <= 0) {
    alert("array is null");
  } else {
    var str = "";
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] != undefined) str += Array[i] + ",";
    }
    document.getElementById("res").innerHTML = str;
  }
}