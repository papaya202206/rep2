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
            obj1.append(row);
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
            row.append(butGroup);
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
        butGroup.append(but);
    }
}

const suji = [
    '1','2','3','4','5','6','7','8','9','.','0','C'
];

function butAction(value, obj2){
    if (value == "C") {
        obj2.val("");
    }else{
        if (obj2.val() == "") {
            obj2.val(value);
        }else{
            obj2.val(obj2.val() + " " + value);
        }
    }
}

function makeSujiBut(obj1, obj2){
    var row;
    var butGroup;

    var row1 = $('<div>', { id:"row1", class:'row g-2' });
    row1.append($('<button>', { id:"col11", class:'btn btn-outline-info btn-lg', type:"button", text:"1", onclick:butAction("1",obj2)}));
    row1.append($('<button>', { id:"col12", class:'btn btn-outline-info btn-lg', type:"button", text:"2", onclick:butAction("2",obj2)}));
    row1.append($('<button>', { id:"col13", class:'btn btn-outline-info btn-lg', type:"button", text:"3", onclick:butAction("3",obj2)}));
    obj1.append(row1);

    var row2 = $('<div>', { id:"row2", class:'row g-2' });
    row2.append($('<button>', { id:"col21", class:'btn btn-outline-info btn-lg', type:"button", text:"4", onclick:butAction("4",obj2)}));
    row2.append($('<button>', { id:"col22", class:'btn btn-outline-info btn-lg', type:"button", text:"5", onclick:butAction("5",obj2)}));
    row2.append($('<button>', { id:"col23", class:'btn btn-outline-info btn-lg', type:"button", text:"6", onclick:butAction("6",obj2)}));
    obj1.append(row2);

    var row3 = $('<div>', { id:"row3", class:'row g-2' });
    row3.append($('<button>', { id:"col31", class:'btn btn-outline-info btn-lg', type:"button", text:".", onclick:butAction(".",obj2)}));
    row3.append($('<button>', { id:"col32", class:'btn btn-outline-info btn-lg', type:"button", text:"0", onclick:butAction("0",obj2)}));
    row3.append($('<button>', { id:"col33", class:'btn btn-outline-info btn-lg', type:"button", text:"C", onclick:butAction("C",obj2)}));
    obj1.append(row3);
    
    
}
