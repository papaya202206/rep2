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
    document.getElementById('answer').className = "form-control";
    setQuestion();
}

function setQuestion() {
    var question = questions[num];

    document.getElementById('buttonlist').innerHTML = "";
    document.getElementById('answer').value = "";

    document.getElementById('number').innerHTML = "もんだい" + (num+1) + " ";
    document.getElementById('context').innerHTML = question.context;

    var prog = (num/questions.length) * 100;
    document.getElementById('progress').style = "width: " + prog + "%";
    document.getElementById('progress').innerHTML = prog + "%";

    
    var row;
    var group;
    for(var j=0; j<question.options.length; j++){
        // if (question.options[j]=='') {
        //     continue;
        // }

        if (j % 25 == 0){
            row = document.createElement('div');
            row.className='row'
            document.getElementById('buttonlist').appendChild(row);
        }

        if (j % 5 == 0) {
            group = document.createElement('div');
            group.className = 'btn-group col-2';
            row.appendChild(group);
        }
        //var col = document.createElement('div');
        //col.className='col-md-1'
        //group.appendChild(col);

        var but = document.createElement('button');
        but.className = 'btn btn-outline-info btn-lg';
        but.type = 'button';
        but.onclick = function() {
            if (this.innerText != "ー") {
                if (document.getElementById('answer').value == "") {
                    document.getElementById('answer').value = this.innerText;
                }else{
                    document.getElementById('answer').value += this.innerText;
                }
                
                this.className = 'btn btn-outline-secondary btn-lg'
                this.disabled = true;
            }
        };
        but.innerText = question.options[j].option;
        group.appendChild(but);
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
    if (num >= questions.length){
        num = 0;
    }
    setQuestion();
    document.getElementById('btn-check').className = "btn btn-warning btn-lg";
    document.getElementById('btn-next').className = "btn btn-primary btn-lg d-none";
}