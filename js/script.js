var interval;
var timeOn = false;
var centiSec = 0;
var sec = 0;
var min = 0;

var topMargin = 160;
var leftMargin = 160;

var s1Top = 0;
var s1Left = 0;

var s2Top = 0;
var s2Left = 80;

var s3Top = 0;
var s3Left = 160;

var s4Top = 80;
var s4Left = 0;

var s5Top = 80;
var s5Left = 80;

var s6Top = 80;
var s6Left = 160;

var s7Top = 160;
var s7Left = 0;

var s8Top = 160;
var s8Left = 80;

function swap(id){
    var topSwap = 0;
    var leftSwap = 0;
    switch(id){
        case "s1":
            topSwap = s1Top;
            leftSwap = s1Left;
            break;
        case "s2":
            topSwap = s2Top;
            leftSwap = s2Left;
            break;
        case "s3":
            topSwap = s3Top;
            leftSwap = s3Left;
            break;
        case "s4":
            topSwap = s4Top;
            leftSwap = s4Left;
            break;
        case "s5":
            topSwap = s5Top;
            leftSwap = s5Left;
            break;
        case "s6":
            topSwap = s6Top;
            leftSwap = s6Left;
            break;
        case "s7":
            topSwap = s7Top;
            leftSwap = s7Left;
            break;
        case "s8":
            topSwap = s8Top;
            leftSwap = s8Left;
            break;
        default :
            break;
    }
    if((topSwap == topMargin && leftSwap == (leftMargin-80)) || (topSwap == (topMargin-80) && leftSwap == leftMargin) || (topSwap == topMargin && leftSwap == (leftMargin+80)) || (topSwap == (topMargin+80) && leftSwap == leftMargin)){
        document.getElementById(id).style.marginTop = topMargin + "px";
        document.getElementById(id).style.marginLeft = leftMargin + "px";

        switch(id){
            case "s1":
                s1Top = topMargin;
                s1Left = leftMargin;
                break;
            case "s2":
                s2Top = topMargin;
                s2Left = leftMargin;
                break;
            case "s3":
                s3Top = topMargin;
                s3Left = leftMargin;
                break;
            case "s4":
                s4Top = topMargin;
                s4Left = leftMargin;
                break;
            case "s5":
                s5Top = topMargin;
                s5Left = leftMargin;
                break;
            case "s6":
                s6Top = topMargin;
                s6Left = leftMargin;
                break;
            case "s7":
                s7Top = topMargin;
                s7Left = leftMargin;
                break;
            case "s8":
                s8Top = topMargin;
                s8Left = leftMargin;
                break;
            default :
                break;
        }

        topMargin = topSwap;
        leftMargin = leftSwap;
    }
}

function scramble(){
    clearInterval(interval);
    centiSec = 0;
    sec = 0;
    min = 0;
    document.getElementById("centi-sec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    timeOn = false;

    var numberArray = Array(0,1,2,3,4,5,6,7,8);
    var marginArray = [[0,0], [0,80], [0,160], [80,0], [80,80], [80,160], [160,0], [160,80], [160,160]];

    var id = "s1";
    var rand = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    s1Top = marginArray[numberArray[rand]][0];
    s1Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s1Top + "px";
    document.getElementById(id).style.marginLeft = s1Left + "px";
    numberArray.splice(rand, 1);

    id = "s2";
    rand = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    s2Top = marginArray[numberArray[rand]][0];
    s2Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s2Top + "px";
    document.getElementById(id).style.marginLeft = s2Left + "px";
    numberArray.splice(rand, 1);

    id = "s3";
    rand = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    s3Top = marginArray[numberArray[rand]][0];
    s3Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s3Top + "px";
    document.getElementById(id).style.marginLeft = s3Left + "px";
    numberArray.splice(rand, 1);

    id = "s4";
    rand = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    s4Top = marginArray[numberArray[rand]][0];
    s4Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s4Top + "px";
    document.getElementById(id).style.marginLeft = s4Left + "px";
    numberArray.splice(rand, 1);

    id = "s5";
    rand = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    s5Top = marginArray[numberArray[rand]][0];
    s5Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s5Top + "px";
    document.getElementById(id).style.marginLeft = s5Left + "px";
    numberArray.splice(rand, 1);

    id = "s6";
    rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    s6Top = marginArray[numberArray[rand]][0];
    s6Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s6Top + "px";
    document.getElementById(id).style.marginLeft = s6Left + "px";
    numberArray.splice(rand, 1);

    id = "s7";
    rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    s7Top = marginArray[numberArray[rand]][0];
    s7Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s7Top + "px";
    document.getElementById(id).style.marginLeft = s7Left + "px";
    numberArray.splice(rand, 1);

    id = "s8";
    rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    s8Top = marginArray[numberArray[rand]][0];
    s8Left = marginArray[numberArray[rand]][1];
    document.getElementById(id).style.marginTop = s8Top + "px";
    document.getElementById(id).style.marginLeft = s8Left + "px";
    numberArray.splice(rand, 1);

    topMargin = marginArray[numberArray[0]][0];
    leftMargin = marginArray[numberArray[0]][1];
}

$(".game-inner-div").click(function(){
    if(!timeOn){
        interval = setInterval(addCentiSec(), 10);
        timeOn = true;
    }
});

function addCentiSec(){
    centiSec = centiSec + 1;
    if(centiSec == 100){
        centiSec = 00;
        addSec();
    }
    if(centiSec < 10){
        document.getElementById("centi-sec").innerHTML = "0"+centiSec;
    }else{
        document.getElementById("centi-sec").innerHTML = centiSec;
    }
}

function addSec(){
    sec = sec + 1;
    if(sec == 60){
        sec = 00;
        addMin();
    }
    if(sec < 10){
        document.getElementById("sec").innerHTML = "0"+sec;
    }else{
        document.getElementById("sec").innerHTML = sec;
    }
}

function addMin(){
    min = min + 1;
    if(min == 60){
        min = 0;
        clearInterval(interval);
    }
    if(min < 10){
        document.getElementById("min").innerHTML = "0"+min;
    } else{
        document.getElementById("min").innerHTML = min;
    }

}