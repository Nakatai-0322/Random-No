function RandomNumber() {
    let max = document.getElementById("maxn").value
    let n = chance.natural({min: 0 , max: max});
    document.getElementById("out").innerHTML = n;
    console.log(n)
}
