//SELECT RELEVANT DOM ELEMENTS
const dayBox=document.getElementById(`daynumber`);
const hourBox=document.getElementById(`hournumber`);
const minuteBox=document.getElementById(`minutenumber`);
const secondBox=document.getElementById(`secondnumber`);

//SET COUNTDOWN DATE...THROUGH SET DATE
let countDownDate=new Date(`31 Jan 2024`);

//RUN SETINTERVAL FUNCTION TO CALL TIME
function setCountDown(){
    //SET A CONSTANT TO STOP COUNTDOWN WHEN IT IS OVER
    const setCountDownTimer=setInterval(()=>{
        //GET CURRENT TIME...GIVEN IN MILLISECONDS
        const currentDate=new Date();
        //CALCULATE REMAINING TIME GIVEN BY SUBTRACTING THE CURRENT TIME FROM THE COUNTDOWN DATE...RESULT WILL BE IN MILLISECONDS
        const remainingTime=countDownDate-currentDate;
        
        //IF STATEMENT TO CHECK IF REMAINING TIME IS GREATER THAN THE COUNTDOWN DATE...CALL THE CLEAR INTERVAL
        if(remainingTime<0){
            alert(`The CountDown has expired`);
            clearInterval(setCountDownTimer);
        }else{
            //IF COUNTDOWN HASN'T EXPIIRED APPLY LOGIC TO CALCULATE DAYS,HOURS,MINUTES AND SECONDS LEFT
            const oneSecond=1*1000;
            const oneMinute=oneSecond*60;
            const oneHour=oneMinute*60;
            const oneDay=oneHour*24;

            /* INCORPORATE TIME LOGIC TO GET REMAINING DAYS,HOURS,MINUTES AND SECONDS */
            const remainingDays=Math.floor(remainingTime/oneDay);
            const remainingHours=Math.floor((remainingTime%oneDay)/oneHour);
            const remainingMinutes=Math.floor((remainingTime%oneHour)/oneMinute);
            const remainingSeconds=Math.floor((remainingTime%oneMinute)/oneSecond);
            //APPEND VALUES IN THE DOM...CALL FUNCTION TO SORT TIME BELOW
            dayBox.innerText=sortTime(remainingDays);
            hourBox.innerText=sortTime(remainingHours);
            minuteBox.innerText=sortTime(remainingMinutes);
            secondBox.innerText=sortTime(remainingSeconds);
        }

    },1000)
}
setCountDown();

//FUNCTION TO SORT TIME...ADD 0 WHEN TIME IS LESS THAN 10
function sortTime(time){
    if(time<10){
        return `0${time}`;
    }else{
        return time;
    }
}