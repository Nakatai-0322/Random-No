/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
function RandomNumber() {
    const min = document.getElementById("minn").value;
    const max = document.getElementById("maxn").value;
    const Randomn = chance.natural({min: min, max: max});

    document.getElementById("out").innerHTML = Randomn;
    console.log(Randomn);
}
