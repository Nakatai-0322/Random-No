/**
Random-No

Copyright (c) 2021~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php
*/
function RandomNumber() {
    let min = document.getElementById("minn").value
    let max = document.getElementById("maxn").value
    let n = chance.natural({min: min , max: max});
    document.getElementById("out").innerHTML = n;
    console.log(n)
}
