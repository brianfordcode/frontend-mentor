function countdown(){
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), 1, 28);

    const currentTime = now.getTime();
    const eventTime = eventDate.getTime();

    const remainingTime = eventTime - currentTime;

    let secs = Math.floor(remainingTime / 1000);
    let mins = Math.floor(secs / 60);
    let hrs = Math.floor(mins / 60);
    let days = Math.floor(hrs / 24);

    hrs %= 24;
    mins %= 60;
    secs %= 60;
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    document.querySelector(".number-days").textContent = days;
    document.querySelector(".number-hours").textContent = hrs;
    document.querySelector(".number-minutes").textContent = mins;
    document.querySelector(".number-seconds").textContent = secs;

    setTimeout(countdown, 1000);
}

countdown();