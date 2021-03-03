document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
var x= document.getElementById('First').value
var y= document.getElementById('Last').value
var a= document.getElementById('Age').value

//var birthDate= new Date(a);
//var diff= Date.now()-birthDate.getTime();
//var age= new Date(diff);
//var realAge= Math.abs(age.getUTCFullYear()- 1970);
var birth= new Date(a);
var diff= Date.now()-birth.getTime();
var Real= new Date(diff);



var output=document.createTextNode('Welcome'+ ' ' + x +' '+y +' '+ Real + '.');
console.log(output);


})