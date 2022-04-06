const hourEl = document.querySelector('hour');
const minuteEl = document.querySelector('minute');
const secondEl = document.querySelector('second');
const timeEl = document.querySelector('time');
const toggleEl = document.querySelector('toggle');
const dateEl = document.querySelector('date');

const days = ['Domingo', lunes', 'Martes', 'Miércoles', Jueves'. 'Viernes'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else { 
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
});

function  SetTime(time);
(() => new Date().getMonth().getDay().getHours();
const getForClock = hour / 12;


);

setTime();