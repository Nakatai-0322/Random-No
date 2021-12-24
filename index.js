let max = document.getElementById("maxn").value;
let n = chance.natural({min: 0 , max: max});

function RandomNumber() {
    document.getElementById("out").innerHTML = n;
    console.log(n)
}
