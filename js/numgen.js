/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php

This software used "bootstrap" and "chance.js".

and their software available under "MIT license".
*/
let boolofcons1 = false;
let HistoryNum;
let NewHistory;

function RandomNumber() {
    const minn = Number(document.getElementById("minn").value);
    const maxn = Number(document.getElementById("maxn").value);
    const Randomn = chance.natural({
        min: minn,
        max: maxn
    });
    document.getElementById("out").innerHTML = Randomn;
    exporttoHTML(Randomn);
    console.log(Randomn);
    if (HistoryNum == null || undefined) {
        HistoryNum = document.createElement("div");
        HistoryMaster.appendChild(HistoryNum);
    };
    return null;
};

function exporttoHTML(arg) {
    HistoryNum = document.getElementById("HistoryNum");
    const new_element = document.createElement("code");
    new_element.textContent = arg + " ";
    HistoryNum.appenedChild(new_element);
    if (boolofcons1 === false){
        document.getElementById("footer-1").remove();
        boolofcons1 = true;
    };
    return null;
};

function delbacklog() {
    location.reload(false);
    return null;
};
