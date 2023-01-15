
// setInterval(() =>{
    // it will execute jab bola gya  every 1000 mili seceond bad 
// })

setInterval(() => {
    // console.log("jyotishna")
    d = new Date();
    htime = d.getHours(); // predefined  functions 
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
 }, 1000);