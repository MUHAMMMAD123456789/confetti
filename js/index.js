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





let deadline = "2024-06-16 00:00"

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



    }

}

setTimer(deadline, '.timer')





const  gender_btns = document.querySelectorAll('#gender .calculating__choose-item')
const  acts = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const res_view = document.querySelector('#res_view')


const user_data = {
    gender: '',
}  


gender_btns.forEach(btn => {
    btn.onclick = () => {
        user_data.gender = btn.getAttribute('data-gender')
        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})


inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
        console.log(user_data);
        // console.log(inp.value, inp.id);
    }
})

// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).



acts.forEach(btn => {
    btn.onclick = () => {
        acts.forEach(elem => elem.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        const act = +btn.getAttribute('data-active')

        let result = 0

        if(user_data.gender === 'women') {
            result = 655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)
        } else {
            result = 66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_data.age)
        }
        
        res_view.innerHTML = Math.round(result * act)
    }
})















// const active_data = {
//     active: 'low',
//     active: 'small',
//     active: 'medium',
//     active: 'high',
// }

// gender_btns.forEach(act => {
//     act.onclick = () => {
//         active_data.active = act.getAttribute('data-active')
//         gender_btns.forEach(elem => elem.classList.remove('calculating__choose-item_active'))
//         act.classList.add('calculating__choose-item_active')
//     }
// })
