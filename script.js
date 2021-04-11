
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const eiddate = '12 May 2021';

function countdown(){
    
    const eid = new Date(eiddate);
    const currentdate = new Date();

    const totalSeconds =(eid-currentdate)/1000;
    const days = Math.floor( totalSeconds / 3600 / 24 );
    const hours = Math.floor(totalSeconds / 3600) %24 ;
    const minutes = Math.floor(totalSeconds / 60) %60 ;
    const seconds = Math.floor( totalSeconds%60);
    console.log(totalSeconds , days , hours , minutes ,seconds);
    // console.log(currentdate.getTime());
    // console.log(eiddate.getTime())

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
}

countdown();

setInterval(countdown,1000);
// const i=2;
// function changebg(){
//     const images = [
//         'url("./images/moon.jpg")',
//         'url("./images/ramadan.jpg")',
//         'url("./images/2.jpg")',
//         'url("./images/1.jpg")'
//     ];

//     const body = document.getElementsByTagName("body");
//     const bg = images[i];
//     body.style.backgroundImage=bg;
//     i=i% images.length;
// }

// setInterval(changebg,2000);

var cycle = 0; 

var allBackgrounds = [
    "./images/moon.jpg",
    "./images/ramadan.jpg",
    "./images/2.jpg",
    "./images/1.jpg"   
];
 
setInterval(function() { 
	if (cycle < 4) { 
		document.body.style.backgroundImage = "url('" + allBackgrounds[cycle] + "')"; 
		cycle += 1; 
	} else {  
		cycle = 0; 
	} 
}, 5000); 

var bgcolor=["red","pink","green"];

var cycle2=0
setInterval(function() { 
	if (cycle2 < 3) { 
		document.getElementById("first").style.color = bgcolor[cycle2]; 
		cycle2 += 1; 
	} else {  
		cycle2 = 0; 
	} 
}, 1000); 
