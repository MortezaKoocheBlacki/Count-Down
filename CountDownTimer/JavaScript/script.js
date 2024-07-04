let totalTimeInMinute = 60;
let totalTimeInSecond = totalTimeInMinute * 60;
let minCircle = document.querySelector(".wrapper .minute .min");
let secCircle = document.querySelector(".wrapper .second .sec");
let restartButton = document.querySelector(".wrapper .restart");
let secCircleDot = document.querySelector(".wrapper .second .dot");
let minCircleDot = document.querySelector(".wrapper .minute .dot");

let countDownTimer = () => {
      let minute = Math.floor(totalTimeInSecond / 60);
      let second = Math.floor(totalTimeInSecond % 60);
      
      secCircle.style.background = `conic-gradient(from 0deg, var(--clr) ${second * 6}deg, #FFF ${second * 6}deg)`;
      minCircle.style.background = `conic-gradient(from 0deg, var(--clr) ${minute * 6}deg, #FFF ${minute * 6}deg)`;

      secCircle.textContent = second;
      minCircle.textContent = minute;

      secCircleDot.style.transform = `rotate(${second * 6}deg)`;
      minCircleDot.style.transform = `rotate(${minute * 6}deg)`;
      
      totalTimeInSecond--;
};

function startTimer(){
      let countDownTimerInterval = setInterval(function(){
            countDownTimer();
      }, 1000);
      
      return countDownTimerInterval;
};

function stopTimer(timer){
      totalTimeInSecond = totalTimeInMinute * 60;
      setTimeout(function(){
            clearInterval(timer);
      }, totalTimeInSecond * 1000 + 1000);
}

let countDown = startTimer();
stopTimer(countDown);

restartButton.addEventListener("click", () => {
      setTimeout(function(){
            clearInterval(countDown);
      }, 1);

      let newCountDownTimer = startTimer();
      stopTimer(newCountDownTimer);
});