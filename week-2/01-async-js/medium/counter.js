function getCurrentTime(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log("HH:MM:SS format:", formattedTime);
}

setInterval(getCurrentTime, 1000);