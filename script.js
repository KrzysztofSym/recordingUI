let [seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let container = document.querySelector(".container");

let int = null;

play.addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
    play.classList.remove("active");
    pause.classList.add("active");
    timeRef.style.color = "var(--clr-acc-thi)";
    container.classList.add("float-card");
});

pause.addEventListener("click", () => {
    clearInterval(int);
    pause.classList.remove("active");
    play.classList.add("active");
    timeRef.style.color = "var(--clr-acc-main)";
    container.classList.remove("float-card");
});

document.querySelector(".stop").addEventListener("click", () => {
    clearInterval(int);
    [seconds, minutes, hours] = [0, 0, 0];
    timeRef.innerHTML = "<h3>00:00:00<h3>";
    pause.classList.remove("active");
    play.classList.add("active");
    timeRef.style.color = "var(--clr-text-main)";
    container.classList.remove("float-card");
}); 

function displayTimer() {
    seconds += 1;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeRef.innerHTML = `<h3>${h}:${m}:${s}</h3>`;

}