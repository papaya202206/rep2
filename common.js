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

function butAction(event){
    if (event.data.param1 == "C") {
        event.data.param2.val("");
    }else{
        if (event.data.param2.val() == "") {
            event.data.param2.val(event.data.param1);
        }else{
            event.data.param2.val(event.data.param2.val() + event.data.param1);
        }
    }
}

function makeSujiBut(obj1, obj2){
    
    var row1 = $('<div>', { id:"row1", class:'row g-2' });
    
    var col1 = $('<div>', { id:"col1", class:'col'});
    var but1 = $('<button>', { id:"but1", class:'btn btn-outline-info btn-lg', type:"button", text:"1"});
    but1.on('click', {param1:"1", param2:obj2}, butAction);
    col1.append(but1);
    row1.append(col1);

    var col2 = $('<div>', { id:"col2", class:'col'});
    var but2 = $('<button>', { id:"but2", class:'btn btn-outline-info btn-lg', type:"button", text:"2"});
    but2.on('click', {param1:"2", param2:obj2}, butAction);
    col2.append(but2);
    row1.append(col2);

    var col3 = $('<div>', { id:"col3", class:'col'});
    var but3 = $('<button>', { id:"col3", class:'btn btn-outline-info btn-lg', type:"button", text:"3"});
    but3.on('click', {param1:"3", param2:obj2}, butAction);
    col3.append(but3);
    row1.append(col3);

    obj1.append(row1);



    var row2 = $('<div>', { id:"row2", class:'row g-2' });
    
    var col4 = $('<div>', { id:"col4", class:'col'});
    var but4 = $('<button>', { id:"but4", class:'btn btn-outline-info btn-lg', type:"button", text:"4"});
    but4.on('click', {param1:"4", param2:obj2}, butAction);
    col4.append(but4);
    row2.append(col4);

    var col5 = $('<div>', { id:"col5", class:'col'});
    var but5 = $('<button>', { id:"but5", class:'btn btn-outline-info btn-lg', type:"button", text:"5"});
    but5.on('click', {param1:"5", param2:obj2}, butAction);
    col5.append(but5);
    row2.append(col5);

    var col6 = $('<div>', { id:"col6", class:'col'});
    var but6 = $('<button>', { id:"but6", class:'btn btn-outline-info btn-lg', type:"button", text:"6"});
    but6.on('click', {param1:"6", param2:obj2}, butAction);
    col6.append(but6);
    row2.append(col6);

    obj1.append(row2);


    var row3 = $('<div>', { id:"row3", class:'row g-2' });
    
    var col7 = $('<div>', { id:"col7", class:'col'});
    var but7 = $('<button>', { id:"but7", class:'btn btn-outline-info btn-lg', type:"button", text:"7"});
    but7.on('click', {param1:"7", param2:obj2}, butAction);
    col7.append(but7);
    row3.append(col7);

    var col8 = $('<div>', { id:"col8", class:'col'});
    var but8 = $('<button>', { id:"but8", class:'btn btn-outline-info btn-lg', type:"button", text:"8"});
    but8.on('click', {param1:"8", param2:obj2}, butAction);
    col8.append(but8);
    row3.append(col8);

    var col9 = $('<div>', { id:"col9", class:'col'});
    var but9 = $('<button>', { id:"but9", class:'btn btn-outline-info btn-lg', type:"button", text:"9"});
    but9.on('click', {param1:"9", param2:obj2}, butAction);
    col9.append(but9);
    row3.append(col9);

    obj1.append(row3);


    var row4 = $('<div>', { id:"row4", class:'row g-2' });
    
    var col10 = $('<div>', { id:"col10", class:'col'});
    var but10 = $('<button>', { id:"but10", class:'btn btn-outline-info btn-lg', type:"button", text:"."});
    but10.on('click', {param1:".", param2:obj2}, butAction);
    col10.append(but10);
    row4.append(col10);

    var col11 = $('<div>', { id:"col11", class:'col'});
    var but11 = $('<button>', { id:"but11", class:'btn btn-outline-info btn-lg', type:"button", text:"0"});
    but11.on('click', {param1:"0", param2:obj2}, butAction);
    col11.append(but11);
    row4.append(col11);
    
    var col12 = $('<div>', { id:"col12", class:'col'});
    var but12 = $('<button>', { id:"but12", class:'btn btn-outline-info btn-lg', type:"button", text:"C"});
    but12.on('click', {param1:"C", param2:obj2}, butAction);
    col12.append(but12);
    row4.append(col12);

    obj1.append(row4);
    
    
}
