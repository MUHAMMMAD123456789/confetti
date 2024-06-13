// slides

const slides = document.querySelectorAll('.offer_slides')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')











const tabs = document.querySelectorAll('.tabcontent')
const tabs_btn = document.querySelectorAll('.tabheader__item')


function tabsShow(idx) {
    tabs.forEach((tab) => tab.classList.add('hide' , 'fade'))
    tabs[idx].classList.remove('hide')
}

tabsShow(0)

tabs_btn.forEach((btn, idx) => {
    btn.onclick = () => {
        tabsShow(idx)
        document.querySelector('tabheader__item_active').classList.remove('tabheader_item_active')
        btn.classList.add('tabheader_item_active')
    } 
})









let deadline = "2024-06-13 13:26:30"

function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.now(),
    days = Math.floor((t / 1000) / 60 / 60 / 24),
    hours = Math.floor((t / 1000) / 60 / 60 % 24),
    minutes = Math.floor((t / 1000) / 60 % 60),
    seconds  = Math.floor((t / 1000) % 60);

    return{
        t,
        days,
        hours,
        minutes,
        seconds
    }


    (function frame() {
        // launch a few confetti from the left edge
        confetti({
          particleCount: 15,
          angle: 60,
          spread: 100,
          origin: { x: 0 }
        });
        // and launch a few from the right edge
        confetti({
          particleCount: 15,
          angle: 120,
          spread: 100,
          origin: { x: 1 }
        });
      
        // keep going until we are out of time
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());


      
}


function setTimer(endTime ,selector) {
    const t = document.querySelector(selector),
    days  = t.querySelector('#days')
    hours = t.querySelector('#hours')
    minutes = t.querySelector('#minutes')
    seconds = t.querySelector('#seconds')
    interval = setInterval(updateTimer, 1000)


    function updateTimer() {
        const t  = getRemainingTime(endTime)

        days.innerHTML = t.days 
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
            var duration = 3 * 1000;
    var end = Date.now() + duration;
    

    
        }
    }


}


setTimer(deadline, '.timer')
