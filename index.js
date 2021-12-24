function RandomNumber() {
    let min = document.getElementById("minn").value
    let max = document.getElementById("maxn").value
    let n = chance.natural({min: min , max: max});
    document.getElementById("out").innerHTML = n;
    console.log(n)
}
