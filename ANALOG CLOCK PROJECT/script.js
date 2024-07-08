//SELECT THE RELEVANT DOM ELEMENTS
const secondHand=document.getElementById(`secondHand`);
const minuteHand=document.getElementById(`minuteHand`);
const hourHand=document.getElementById(`hourHand`);
const toggleButton=document.getElementById(`toggleButton`);

//SET A SETTIMER FUNCTION THAT WILL RUN THE CLOCK
function setClock(){
    //SET THE SETINTERVAL TO CALL THE SECONDS AND MINUTES
    setInterval(()=>{
        //GET TODAYS DATE
        const currentDate=new Date();
        //GET THE NUMBER OF SECONDS,MINUTES AND HOURS
        const currentSeconds=(currentDate.getSeconds()/60);
        const currentMinutes=(currentDate.getMinutes()/60);
        const currentHour=(currentDate.getHours()/12);
        //CONVERT THE SEC,MIN AND HOURS TO DEGREES....MULTIPLY BY 360
        const currentSecondsToDeg=currentSeconds*360;
        const currentMinutesToDeg=currentMinutes*360;
        const currentHourToDeg=currentHour*360;
        //APPEND THE DEGREES TO THE INDICATORS
        secondHand.style.transform=`rotate(${currentSecondsToDeg}deg)`;
        minuteHand.style.transform=`rotate(${currentMinutesToDeg}deg)`;
        hourHand.style.transform=`rotate(${currentHourToDeg}deg)`;

    },1000)
};
setClock();

// ADD EVENT LISTENER TO THE TOGGLE BUTTON 
toggleButton.addEventListener(`click`,runEvent);
function runEvent(e){
    //GET THE DOCUMENT BODY
    const docBody=document.body;
    docBody.classList.toggle(`dark`);
    if(docBody.classList.contains(`dark`)){
        toggleButton.textContent=`LIGHT MODE`;
        toggleButton.style.fontSize="1rem";
    }else{
        toggleButton.textContent=`Dark Mode`;
    }
}