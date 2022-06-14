var questions = [];
var num = 0;
function loadSyakaiXml(){
    const xhr = new XMLHttpRequest();

    // リクエスト
    xhr.open("GET", 'syakai.json');
    
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
    document.getElementById('answer').className = "form-control";
    setQuestion();
}

function setQuestion() {
    var question = questions[num];

    document.getElementById('buttonlist').innerHTML = "";
    document.getElementById('answer').value = "";

    document.getElementById('context').innerHTML = question.context;

    var row = document.createElement('div');
    row.className='row'

    for(var j=0; j<question.options.length; j++){
        if (question.options[j]=='') {
            continue;
        } 
        var col = document.createElement('div');
        col.className='col-md-3'
        var but = document.createElement('button');
        but.className = 'btn btn-info btn-lg';
        but.type = 'button';
        but.onclick = function() {
            if (document.getElementById('answer').value == "") {
                document.getElementById('answer').value = this.innerText;
            }else{
                document.getElementById('answer').value += "    " + this.innerText;
            }
            
            this.className = 'btn btn-secondary btn-lg'
            this.disabled = true;
        };
        but.innerText = question.options[j].option;
        col.appendChild(but);
        row.appendChild(col);
    }

    document.getElementById('buttonlist').appendChild(row);
}


function check(){
    var question = questions[num];
    var correctAnswers = question.answers;
    var ans = document.getElementById('answer').value.split("¥t");
    var flg = true;
    if (correctAnswers.length == ans.length) {
        for (cor of correctAnswers){
            if (ans.indexOf(cor.answer) < 0){
                flg = false;
                break;
            }
        }
    }else{
        flg = false;
    }
    
    if (flg){
        document.getElementById('answer').className = "form-control text-primary";
        document.getElementById('btn-check').className = "btn btn-warning btn-lg d-none";
        document.getElementById('btn-next').className = "btn btn-primary btn-lg";
    }else{
        document.getElementById('answer').className = "form-control text-danger";
        document.getElementById('btn-check').className = "btn btn-warning btn-lg";
        document.getElementById('btn-next').className = "btn btn-primary btn-lg d-none";
    }
}

function next(){
    num++;
    setQuestion();
    document.getElementById('btn-check').className = "btn btn-warning btn-lg";
    document.getElementById('btn-next').className = "btn btn-primary btn-lg d-none";
}