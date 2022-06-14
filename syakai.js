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
            setQuestion(num);
        }  
    }
}

function reset(){
    setQuestion(num);
}

function setQuestion() {
    var question = questions[num];

    document.getElementById('buttonlist').innerHTML = "";
    document.getElementById('answer').innerHTML = "";

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
            document.getElementById('answer').value += " " + this.innerText;
            this.className = 'btn btn-secondary btn-lg'
            this.disabled = true;
        };
        but.innerText = question.options[j].option;
        col.appendChild(but);
        row.appendChild(col);
    }

    document.getElementById('buttonlist').appendChild(row);
}
