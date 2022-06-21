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

function makeHiraganaBut(obj1, obj2){
    var row;
    var butGroup;
    for(var j=0; j<hiragana.length; j++){
        if (j == 0 ||  j == 50){
            row = document.createElement('div');
            row.className='row g-2';
            obj1.appendChild(row);
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
                if (obj2.value == "") {
                    obj2.value = this.innerText;
                }else{
                    obj2.value += this.innerText;
                }
            }
        };
        butGroup.appendChild(but);
    }
}

const suji = [
    '1','2','3','4','5','6','7','8','9','.','0','C'
];

function makeSujiBut(obj1, obj2){
    var row;
    var butGroup;
    for(var j=0; j<suji.length; j++){
        if (j % 3 == 0){
            row = document.createElement('div');
            row.className='row g-2';
            obj1.appendChild(row);
        }

        var but = document.createElement('button');
        but.className = 'btn btn-outline-info btn-lg';
        but.type = 'button';
        but.innerText = suji[j];
        but.onclick = function() {
            if (this.innerText == "C") {
                obj2.value = "";
            }else{
                if (obj2.value == "") {
                    obj2.value = this.innerText;
                }else{
                    obj2.value += this.innerText;
                }
            }
        };
        row.appendChild(but);
    }
}