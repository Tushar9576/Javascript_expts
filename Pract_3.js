function reverseString()
{
    let a = document.getElementById("String1").value;
    let b = a.split('').reverse().join('');
    //alert("Reversed String : "+b);
    document.getElementById("Ans1").innerHTML = b;
}

function replaceCharInString()
{
    var c = document.getElementById("String2").value;
    var d = document.getElementById("char1").value;
    var e = document.getElementById("char2").value;
    if(!c.includes(d)) alert("Char not found");
    else{
    let f = c.replaceAll(d,e);

    alert("Replaced String:" +f);
    document.getElementById("Ans2").innerHTML = f;}
}

function isPalindrome()
{
    var s3= document.getElementById("s3").value;
    var s1=s3.split('').reverse().join('')
    let result = s1.localeCompare(s3);
    if(result==0)
    {
        ans="Given string is palindrome";
    }
    else{
        ans="Given string is not palindrome";
    }

    document.getElementById("display2").innerHTML = ans;
}
