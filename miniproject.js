let gamesqu = [];
let usersqu = [];
let startgame = false;
let level = 0;
let btns = ["yellow", "pink", "purple", "green"];
document.addEventListener("keypress", function () {
    if (startgame == false) {
        console.log("game started");

    }
    levelup();
    startgame = true;

});
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
};
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250)
};
let h2 = document.querySelector("h2");
function levelup() {
    usersqu = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomCol = btns[randomIdx];
    let randmbtn = document.querySelector(`.${randomCol}`);
    console.log(randomIdx + "= " + randomCol);
    gamesqu.push(randomCol);
    console.log(gamesqu);
    flash(randmbtn);
}
function checkans(idx) {

    if (gamesqu[idx] == usersqu[idx]) {
        if (userflash.length == gamesqu.length) {
            setTimeout(levelup, 1000);
            levelup();
        }
    }
    else {
        h2.innerHTML = `Game is Over.!Your score was<b>${level}</b> <br>please press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 1200);
        reset();
    }
}
function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    usersqu.push(usercolor);
    console.log(usersqu);
    checkans(usersqu.length - 1);

}
let allbtn = document.querySelectorAll(".btn");
for (allbtns of allbtn) {
    allbtns.addEventListener("click", btnpress);
}
function reset() {
    startgame = false;
    usersqu = [];
    gamesqu = [];
    level = 0;
}
