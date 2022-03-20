/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php

This software used "bootstrap" and "chance.js".

and their software available under "MIT license".
*/
let boolofcons1 = false
let HistoryMaster
let HistoryNum
let newhistory

function RandomNumber() {
    const Randomn = chance.natural({
        min: Number(document.getElementById("minn").value),
        max: Number(document.getElementById("maxn").value)
    });

    document.getElementById("out").innerHTML = Randomn;
    exporttoHTML(Randomn)
    console.log(Randomn);
};

function exporttoHTML(Num) {
    HistoryMaster = document.getElementById("HistoryMaster")
    HistoryNum = document.getElementById('HistoryNum');
    if(HistoryNum === null || undefined){
        HistoryNum = document.createElement("div")
        HistoryMaster.appendChild(HistoryNum)
    }
    var new_element = document.createElement('code');
    new_element.textContent = Num + " ";
    HistoryNum.appendChild(new_element)
    if(boolofcons1 === false){
        console.clear()
        document.getElementById("footer-1").remove();
        boolofcons1 = true
    };
}

function delbacklog(){
    HistoryNum.remove()
    return false;
}
