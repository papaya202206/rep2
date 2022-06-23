var num = 0;
var operation = "+";
var counts = 2;
var numbers = [];
var digit = 2;
var fraction = 0;
var context = "";

$(window).on('after load', init());

function init(){
    makeSujiBut($('#buttonlist'), $('#answer'));
    setQuestion()
}

function start(){
    setQuestion();
}

function reset(){
    $('#answer').className = "form-control bg-white";
}


function setRandamNumbers(){
    for (var i=0; i<counts; i++){
        numbers[i] = getRandamNumber();
    }
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

var correctAns = 0;
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
    
    setRandamNumbers();
    
    for(var i=0; i<counts; i++){
        context += numbers[i];
        correctAns += numbers[i];
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
    }else{
        $('#answer').removeClass("bg-white");
        $('#answer').addClass("bg-danger");
        $('#btn-check').removeClass("d-none");
        $('#btn-next').addClass("d-none");
        $('#symbol').addClass("d-none");
    }
}

function next(){
    num++;
    
    setQuestion();
    
}