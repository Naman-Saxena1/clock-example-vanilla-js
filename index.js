const jsClockElement = document.querySelector("#jsClock")

function tick()
{
    const time = new Date().toLocaleString();
    
    jsClockElement.innerHTML = time;
}

setInterval(tick, 1000)