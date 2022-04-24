function find(){

var d1 = Math.floor(Math.random()*6)+1;
// alert(d1);

var d2 = Math.floor(Math.random()*6)+1;
// alert(d1);
var s1 = "images/dice"+d1+".png";
// alert(s1);
var s2 = "images/dice"+d2+".png";

document.querySelector(".img1").setAttribute("src",s1);

document.querySelector(".img2").setAttribute("src",s2);


    
document.querySelector("h2").innerText = "Total Score : "+(d1+d2);

}