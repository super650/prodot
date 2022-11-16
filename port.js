const nav =document.getElementById("#")

var scroll = new SmoothScroll('a[href*="#"]',{
                        
    speed:1000,
    speedAsDuration:true
});


var typed =new Typed(".auto-type",{
    strings:["FRONT END DEVELOPER"," COME FROM CHENNAI","MOHAMED SALMAN"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});

let sub =document.getElementsByClassName(".btn");


function submit(){
    console.log(getValue("sub"));
}