console.log("hi")


const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const box = document.getElementById("box");



let intervalId = null


function startCounting(){
    if(intervalId === null){
        intervalId = setInterval(function(){
            let figure =parseInt(box.textContent);
            if(figure < 15){
                figure++
                box.textContent = figure
                console.log("fine")
                

            }else{
                box.innerHTML = "UP";
                clearInterval(intervalId)
                console.log("stopped")
                intervalId = null
            }
            
        },1000)
    }
};

function stopCounting(){
    if(intervalId !== null){
        clearInterval(intervalId)
       console.log("stopped")
       intervalId = null

    }
}

startBtn.addEventListener("click",startCounting);
stopBtn.addEventListener("click",stopCounting);


let setters = 10;

let universalId = setInterval(function(){
    linger()
    if(setters < 0){
        clearInterval(universalId)
        console.log("fine")
    }
},1000)


function linger(){
    setters--;
    console.log(setters)
}


// Select the element with id "box"
// let box = document.getElementById('box');





// FOR SEtTIMEOUT BELOW!


// let timeoutId = null;
// let isRunning = false;


// function incrementNumber() {
    
//     let figure = parseInt(box.textContent);


//     figure++;

    
//     box.textContent = figure;

    
//     console.log("fine");

    
//     if (isRunning) {
//         timeoutId = setTimeout(incrementNumber, 1000);
//     }
// }


// function startCounting() {
    
//     if (!isRunning) {
//         isRunning = true;
//         incrementNumber(); 
//     }
// }

// function stopCounting() {
    
//     if (isRunning) {
//         isRunning = false; 
//         clearTimeout(timeoutId); 
//         console.log("Counting stopped");
//     }
// }

// startBtn.addEventListener('click', startCounting);
// stopBtn.addEventListener('click', stopCounting);