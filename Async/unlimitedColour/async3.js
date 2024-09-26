// generate unlimited colours using "hex code"
// A hex code is a way to represent colors in web development. 
// It is a 6-digit code, Each pair of digits represents the intensity of the red, green, and blue (RGB) components of the color in hexadecimal (base 16) format, ranging from 00 to FF.


const randomColor = function(){
    const hex = "0123456789ABCDEF"
    // now to get the colour
    let color = '#'
    // looping hex variable 
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;

// creating function for start button
const startChange = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChange = function(){
    clearInterval(intervalId);
    intervalId = null; // when we click stop button intervalId becomes null
};

document.querySelector('#start').
addEventListener('click',startChange);

document.querySelector('#stop').
addEventListener('click',stopChange);

