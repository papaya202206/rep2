var questions = [];
var num = 0;
function loadKanji1JSON(){
    const xhr = new XMLHttpRequest();

    // リクエスト
    xhr.open("GET", 'kanji1.json');
    
    //リクエスト送信
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // jsonをオブジェクトに変更
            const jsonObj = JSON.parse(xhr.responseText);      
            questions = jsonObj.question;
            for (let item of jsonObj.question) {        
                console.log("context: " + item.context + " options: " + item.options + " answers: " + item.answers);        
            }
            setQuestion();
        }  
    }
}

function reset(){
    document.getElementById('answer').className = "form-control bg-white";
    setQuestion();
}

function setQuestion() {
    var question = questions[num];

    document.getElementById('buttonlist').innerHTML = "";
    document.getElementById('answer').value = "";

    document.getElementById('number').innerHTML = "もんだい " + (num+1);
    document.getElementById('context').innerHTML = question.context;

    var prog = (num/questions.length) * 100;
    document.getElementById('progress').style = "width: " + prog + "%";
    document.getElementById('progress').innerHTML = prog + "%";

    if (question.prefx != "") {
        document.getElementById('prefx').innerHTML = question.prefx;
        document.getElementById('prefx').className = "input-group-text";
    } else {
        document.getElementById('prefx').innerHTML = question.prefx;
        document.getElementById('prefx').className = "input-group-text d-none";
    }

    if (question.sufx != "") {
        document.getElementById('sufx').innerHTML = question.sufx;
        document.getElementById('sufx').className = "input-group-text";
    } else {
        document.getElementById('sufx').innerHTML = question.sufx;
        document.getElementById('sufx').className = "input-group-text d-none";
    }

    document.getElementById('kanjiChar').innerHTML = question.kanji;

    makeHiraganaBut();
}

const hiragana = [
    'あ','い','う','え','お',
    'か','き','く','け','こ',
    'さ','し','す','せ','そ',
    'た','ち','つ','て','と',
    'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ',
    'ま','み','む','め','も',
    'や','ー','ゆ','ー','よ',
    'ら','り','る','れ','ろ',
    'わ','を','ん','ー','ー',

    
    'が','ぎ','ぐ','げ','ご',
    'ざ','じ','ず','ぜ','ぞ',
    'だ','ぢ','づ','で','ど',
    'ば','び','ぶ','べ','ぼ',
    'ぱ','ぴ','ぷ','ぺ','ぽ',
    'ゃ','ゅ','ょ','っ','ー',
];
var hiraganaBut;
function makeHiraganaBut(){
    var row;
    var butGroup;
    for(var j=0; j<hiragana.length; j++){
        if (j == 0 ||  j == 50){
            row = document.createElement('div');
            row.className='row g-2';
            document.getElementById('buttonlist').appendChild(row);
        }

        if (j % 5 == 0) {
            butGroup = document.createElement('div');
            if (j==0){
                butGroup.className = 'btn-group-vertical col-1 offset-1 gy-4';
            }else if(j == 50){
                butGroup.className = 'btn-group-vertical col-1 offset-2 gy-4';
            }else if(j == 65){
                butGroup.className = 'btn-group-vertical col-1 offset-1 gy-4';
            }else if(j == 75){
                butGroup.className = 'btn-group-vertical col-1 offset-1 gy-4';
            }else{
                butGroup.className = 'btn-group-vertical col-1 gy-4';
            }
            row.appendChild(butGroup);
        }

        var but = document.createElement('button');
        but.className = 'btn btn-outline-info btn-sm';
        but.type = 'button';
        but.innerText = hiragana[j];
        but.onclick = function() {
            if (this.innerText != "ー") {
                if (document.getElementById('answer').value == "") {
                    document.getElementById('answer').value = this.innerText;
                }else{
                    document.getElementById('answer').value += this.innerText;
                }
            }
        };
        butGroup.appendChild(but);
    }
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