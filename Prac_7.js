var points = new Array();
var size=0;
const create_array=() =>{
    let Input_array=document.getElementById("CreateArrayInput").value;
    if(Input_array>0){
        size= Input_array 
        alert("Array is created of size "+ Input_array)

    }
    else{
        alert("Enter valid size")
    }
    

}
const Add_array=() =>{
    // let =document.getElementById("ArrayInput").value;
    let Input_number=document.getElementById("ArrayInput").value;

    if(size!=0 & points.length<size ){
        if(Input_number==""){
            alert("Enter valid element")
        }
        else if(points.indexOf(Input_number) !== -1){
            alert("Element already present")
        }
        else{
            document.getElementById("arrayreult").innerHTML="";
            points.push(Input_number);
            document.getElementById("arrayreult").innerHTML=points;
        }
       }
    else{
        alert("Create New Array first")
    }
        

   
    

}
const Add_start_array=() =>{
    let Input_number=document.getElementById("ArrayInput").value;
    
    
    if(size!=0 & points.length<size ){
        if(Input_number==""){
            alert("Enter valid element")
        }
        else if(points.indexOf(Input_number) !== -1){
            alert("Element already present")
        }
        else{
            document.getElementById("arrayreult").innerHTML="";
            points.unshift(Input_number);
            document.getElementById("arrayreult").innerHTML=points;
        }
       }
    else{
        alert("Create New Array first")
    }
        

   
    

}
const pop_array=() =>{
    
    
    
    if(size!=0 & points.length>0 ){
        let popele=points.pop()
        alert("Element Poped "+popele)
        
            document.getElementById("arrayreult").innerHTML="";
            document.getElementById("arrayreult").innerHTML=points;
        
       }
    else{
        alert(" Array is Empty ")
    }
        

   
    

}
const shift_array=() =>{
    
    
    
    if(size!=0 & points.length>0 ){
        let popele=points.shift()
        alert("Element Shifted "+popele)
        
            document.getElementById("arrayreult").innerHTML="";
            document.getElementById("arrayreult").innerHTML=points;
        
       }
    else{
        alert(" Array is Empty ")
    }
        

   
    

}

const Check_array=() =>{
let Input_array=document.getElementById("CheckArrayInput").value;

let result=false;
try{
    let new_array=JSON.parse(Input_array);
     result = Array.isArray(new_array);
     document.getElementById("checharrayreult").innerHTML="Input is a array";
}
catch{
result=false;
document.getElementById("checharrayreult").innerHTML="Input is not a array";
}

}
