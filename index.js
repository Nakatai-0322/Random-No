/*
Random-No

Copyright (c) 2022~Present Nakatai.

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php

This software used "bootstrap" and "chance.js".

and their software available under "MIT license".
*/

import ("//cdn.jsdelivr.net/npm/chance@latest/chance.min.js");

function RandomNumber() {
    const Randomn = chance.natural({
        min: Number(document.getElementById("minn").value),
        max: Number(document.getElementById("maxn").value)
    });

    document.getElementById("out").innerHTML = Randomn;
    console.log(Randomn);
}
