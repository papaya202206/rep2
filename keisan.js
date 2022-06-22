var num = 0;
var operation = "+";
var counts = 2;
var numbers = [];
var digit = 2;
var fraction = 0;
var context = "";

$(window).on('after load', init());

function init(){
    var obj1 = $('#buttonlist');
    var obj2 = $('#answer');
    makeSujiBut(obj1, obj2);
    setQuestion()
}

function start(){
    setQuestion();
}

function setValue(value){
    $('#'+id).val(value);
    //document.getElementById(id).value = value;
}

function setInnerHTMLById(id, html){
    $('#'+id).html(html);
    //document.getElementById(id).innerHTML = html;
}

function reset(){
    var obj2 = $('#answer').className = "form-control bg-white";
    setQuestion();
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


function setQuestion() {
    $('#answer').val('');
    $('#number').html('問題' + (num + 1));

    setRandamNumbers();

    
    for(var i=0; i<counts; i++){
        context += numbers[i];
        if(i < counts - 1){
            context += operation
        }
    }
    $('#context').html(context);
}

function check(){
    var question = questions[num];
    var correctAnswers = question.answers;
    var ans = document.getElementById('answer').value;
    var flg = true;
    if (correctAnswers.length == ans.length) {
        var text = "";
        for(elem of correctAnswers){
            text += elem.answer;
        }
        if (text != ans) {
            console.log(text, ans);
            flg = false;
        }
    }else{
        flg = false;
    }
    
    if (flg){
        //document.getElementById('answer').className = "form-control bg-primary";
        document.getElementById('btn-check').className = "btn btn-outline-warning btn-lg d-none";
        document.getElementById('btn-next').className = "btn btn-outline-primary btn-lg";
        document.getElementById('symbol').className = "far fa-circle text-danger";
    }else{
        document.getElementById('answer').className = "form-control bg-danger";
        document.getElementById('btn-check').className = "btn btn-outline-warning btn-lg";
        document.getElementById('btn-next').className = "btn btn-outline-primary btn-lg d-none";
    }
}

function next(){
    num++;
    if (num >= questions.length){
        num = 0;
    }
    setQuestion();
    document.getElementById('answer').className = "form-control bg-white";
    document.getElementById('btn-check').className = "btn btn-outline-warning btn-lg";
    document.getElementById('btn-next').className = "btn btn-outline-primary btn-lg d-none";
    document.getElementById('symbol').className = "";
}