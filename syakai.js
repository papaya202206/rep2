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

            for (let item of jsonObj) {        
                console.log("context: " + item.context + " options: " + item.options + " answers: " + item.answers);        
            }
    
        }  
    }



    // var xmlhttp = new XMLHttpRequest();

    // xmlhttp.onreadystatechange = function () {
    //     if (xmlhttp.readyState == 4) {
    //         if (xmlhttp.status == 200) {
    //             var docelem = xmlhttp.responseXML.documentElement;
    //             var items = docelem.getElementsByTagName("item");
    //             for (i = 0; i < items.length; i++) {
    //                 var question = items[i].getElementsByTagName("question");
    //                 console.log("question:" + question[0].textContent);
    //                 var options = items[i].getElementsByTagName("option");
    //                 for (j = 0; j < options.length; j++) {
    //                     console.log("option:" + options[j].textContent);
    //                 }
    //                 var answers = items[i].getElementsByTagName("answer");
    //                 for (k = 0; k <  answers.length; k++) {
    //                     console.log("answer:" + answers[k].textContent);
    //                 }
    //             }
    //         } else {
    //             alert("status = " + xmlhttp.status);
    //         }
    //     }
    // }
    // xmlhttp.open("GET", "syakai.xml");
    // //xmlhttp.responseType = "document";
    // xmlhttp.send();
}
