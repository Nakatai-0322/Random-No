/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the Apache License.
https://opensource.org/licenses/Apache-2.0

This software used "bootstrap" and "chance.js".

and their software available under "Apache license".
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
    };
};

function exporttoHTML(arg) {
    HistoryNum = document.getElementById("HistoryNum");
    const new_element = document.createElement("code");
    const txt = arg + " ";
    new_element.textContent = txt;
    HistoryNum.appendChild(new_element);
    if (boolofcons1 === false){
        document.getElementById("footer-1").remove();
        boolofcons1 = true;
    };
};
