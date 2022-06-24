var num = 0;
var operation = "+";
var counts = 2;
var numbers = [];
var digit = 2;
var fraction = 0;
var context = "";
var correctAns = 0;
var timerId;
var intervalId;
var startTime;
var timeLimit = 5000;
var interval = 100;
var progress = 0;

$(window).on('after load', init());

function init(){
    makeSujiBut($('#buttonlist'), $('#answer'));
    //setQuestion()
}

function start(){
    $('#btn-start').addClass("d-none");
    num++;
    setQuestion();
    startTimer();
}

function next(){
    num++;
    setQuestion();
    startTimer();
}

function reset(){
    $('#answer').removeClass("bg-danger");
    $('#answer').removeClass("bg-white");
    $('#symbolng').addClass("d-none");
    $('#answer').val("");
}


function setRandamNumbers(){
    for (var i=0; i<counts; i++){
        numbers[i] = getRandamNumber();
    }
}

function startTimer(){
    startTime = new Date();
    timerId = setTimeout(check, timeLimit);
    intervalId = setInterval(setProgress, interval);
}

function resetTimer(){
    clearTimeout(timerId);
    clearInterval(intervalId);
}

function setProgress(){
    progress += interval / timeLimit * 100;
    $('#progress').css('width',progress + "%"); 
}


function getRandamNumber(){
    var value = 0;
    if (digit == 1){
        value = Math.round10(Math.random() * 11);
    }else if (digit == 2){
        value = Math.floor(Math.random() * 101);
    }else if (digit == 3){
        value = Math.floor(Math.random() * 1001);
    }else{
        value = Math.floor(Math.random() * 101);
    }

    if(fraction == 0){
        return value;
    }else if(fraction == 1){
        return value + Math.round10(Math.random(), -1);
    }else if(fraction == 2){
        return value + Math.round10(Math.random(), -2);
    }else{
        return value;
    }
}


function setQuestion() {
    correctAns = 0;
    context = "";
    $('#answer').val('');
    $('#number').html('問題' + (num + 1));

    $('#answer').addClass("bg-white");
    $('#answer').removeClass("bg-danger");
    $('#btn-check').removeClass("d-none");
    $('#btn-next').addClass("d-none");
    $('#symbol').addClass("d-none");
    $('#symbolng').addClass("d-none");

    $('#progress').css('width',0);
    
    setRandamNumbers();
    
    for(var i=0; i<counts; i++){
        context += numbers[i];
        correctAns += parseInt(numbers[i]);
        if(i < counts - 1){
            context += operation
        }
    }
    context += "="
    $('#prefx').html(context);
}

function check(){
    var ans = $('#answer').val();
    var flg = true;
    if (ans == correctAns){
        $('#answer').addClass("bg-white");
        $('#answer').removeClass("bg-danger");
        $('#btn-check').addClass("d-none");
        $('#btn-next').removeClass("d-none");
        $('#symbol').removeClass("d-none");
        $('#symbolng').addClass("d-none");
        resetTimer();
    }else{
        $('#answer').removeClass("bg-white");
        $('#answer').addClass("bg-danger");
        $('#btn-check').removeClass("d-none");
        $('#btn-next').addClass("d-none");
        $('#symbol').addClass("d-none");
        $('#symbolng').removeClass("d-none");
    }
}

