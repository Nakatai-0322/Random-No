/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
function RandomNumber() {
    let min = document.getElementById("minn").value
    let max = document.getElementById("maxn").value
    let Randon = chance.natural({min: min , max: max});
    document.getElementById("out").innerHTML = Randon;
    console.log(Randon)
}
