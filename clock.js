const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000); // 함수를 지정한 시간마다 초기화 (function, 밀리세컨드 단위: 1000ms = 1s)
}
init();