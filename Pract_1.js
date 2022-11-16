function calc() {
    let a = document.getElementById("lenght");
    let b = document.getElementById("height");
    let ans = document.getElementById("ans");
    let area = (a.value) * (b.value);
    if(a.value<0 || b.value<0) ans.innerHTML = "Wrong Input";
    else
    ans.innerHTML = "Area of rectangle: " + area;

};
function calcC() {
    let a = document.getElementById("Radius");
    let ans = document.getElementById("ansC");
    let area = 3.14 * (a.value) * (a.value);
    if(a.value<0) ans.innerHTML = "Wrong Input";
    else 
    ans.innerHTML = "Area of Circle: " + area;

};
function calcT() {
    let a = parseInt(document.getElementById("Sidea").value);
    let b = parseInt(document.getElementById("Sideb").value);
    let c = parseInt(document.getElementById("Sidec").value);
    
    var s = (a + b + c) / 2;
    var p = ((s - a) * (s - b) * (s - c)) * (s)
    let area = Math.sqrt(p);
    let ans = document.getElementById("ansT");
    if(a < 0 || b < 0 || c < 0) ans.innerHTML = "Wrong Input";
    else
    ans.innerHTML = "Area of Triangle: " + area;
};